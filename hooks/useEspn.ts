import { Team } from '../pages/api/stats';
import { useState, useEffect } from 'react';

interface IUseEspnProps {
  weekId: number;
}

interface IUseEspnResult {
  teams: Team[];
  refresh: () => void;
}

type UseEspnHook = (props: IUseEspnProps) => IUseEspnResult;

const fetchStats = (): Promise<Team[]> =>
  new Promise<Team[]>((resolve, reject) => {
    fetch('/api/stats')
      .then((response: Response) => {
        response
          .json()
          .then((values: Team[]) => {
            resolve(values);
          })
          .catch((reason: any) => reject(reason));
      })
      .catch((reason: any) => reject(reason));
  });

const useEspn: UseEspnHook = ({ weekId }: IUseEspnProps) => {
  const [results, setResults] = useState<Team[]>([]);

  const refresh = () => {
    fetchStats().then((teams: Team[]) => {
      setResults(teams);
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  return { teams: results, refresh };
};

export default useEspn;
