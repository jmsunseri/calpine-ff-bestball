import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IResult, Team, WeeklyResult } from '@api/models';
import { getCurrentWeek } from '@api/utils';

export interface IUseEspnResult {
  result: IResult;
}

type UseEspnHook = () => IUseEspnResult;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const useEspn: UseEspnHook = () => {
  const [result, setResult] = useState<IResult>({ teams: [] });

  const { data: fullRefresh, isValidating: fullRefreshLoading } = useSWR<
    IResult
  >('/api/stats', fetcher, {
    refreshInterval: 86400000,
  });

  const { data: refreshed } = useSWR<IResult>(
    '/api/this-week',
    (url: string) => {
      if (fullRefresh && !fullRefreshLoading) {
        return fetch(url).then((r) => r.json());
      }
    },
    {
      refreshInterval: 30000,
    }
  );

  useEffect(() => {
    const weekId = getCurrentWeek();

    if (refreshed) {
      const teams = refreshed.teams.map(
        (team: Team): Team => ({
          ...team,
          weeklyResults: [
            ...team.weeklyResults,
            ...fullRefresh.teams
              .find((ct: Team) => ct.id === team.id)
              .weeklyResults.filter((wr: WeeklyResult) => wr.weekId !== weekId),
          ],
        })
      );
      setResult((previous: IResult) => ({ ...previous, ...refreshed, teams }));
    }
  }, [refreshed]);

  useEffect(() => {
    setResult((previous: IResult) => ({ ...previous, ...fullRefresh }));
  }, [fullRefresh]);

  return { result };
};

export default useEspn;
