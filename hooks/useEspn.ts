import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IResult, Team, WeeklyResult } from '@api/models';
import { getCurrentWeek } from '@api/utils';
import dayjs from 'dayjs';

export interface IUseEspnResult {
  result: IResult;
}

type UseEspnHook = () => IUseEspnResult;

const useEspn: UseEspnHook = () => {
  const [result, setResult] = useState<IResult>({ teams: [] });
  const [isFullRefresh, setIsFullRefresh] = useState<boolean>();

  const fetcher = (url: string, isTimeToFullRefresh: boolean) => {
    if (isTimeToFullRefresh) {
      setIsFullRefresh(true);
      return fetch('/api/stats/all').then((r) => r.json());
    } else {
      setIsFullRefresh(false);
      return fetch('/api/stats/this-week').then((r) => r.json());
    }
  };

  const isTimeToFullRefresh = (): boolean => {
    const now = dayjs();
    const deadline = dayjs(result.fullRefresh).add(1, 'day');
    const timeForAFullRefresh = deadline < now || !result.fullRefresh;
    return timeForAFullRefresh;
  };

  const { data, isValidating: loading } = useSWR<IResult>(
    ['/api/stats/all', isTimeToFullRefresh()],
    fetcher,
    {
      refreshInterval: 30000,
    }
  );

  useEffect(() => {
    if (!loading && data) {
      if (isFullRefresh) {
        setResult({
          updatedDate: dayjs(),
          fullRefresh: dayjs(),
          teams: data.teams,
        });
      } else {
        const weekId = getCurrentWeek();
        const teams = data.teams.map(
          (team: Team): Team => ({
            ...team,
            weeklyResults: [
              ...team.weeklyResults,
              ...result.teams
                .find((ct: Team) => ct.id === team.id)
                .weeklyResults.filter(
                  (wr: WeeklyResult) => wr.weekId !== weekId
                ),
            ],
          })
        );
        setResult((previous: IResult) => ({
          ...previous,
          updatedDate: dayjs(),
          teams,
        }));
      }
    }
  }, [loading]);

  return { result };
};

export default useEspn;
