import { IResult } from '../pages/api/stats';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

interface IUseEspnResult {
  result: IResult;
  refresh: () => void;
}

type UseEspnHook = () => IUseEspnResult;

const fetchStats = (): Promise<IResult> =>
  new Promise<IResult>((resolve, reject) => {
    fetch('/api/stats')
      .then((response: Response) => {
        response
          .json()
          .then((values: IResult) => {
            resolve(values);
          })
          .catch((reason: any) => reject(reason));
      })
      .catch((reason: any) => reject(reason));
  });

const useEspn: UseEspnHook = () => {
  const [result, setResult] = useState<IResult>({ teams: [] });

  const refresh = () => {
    fetchStats().then((r: IResult) => {
      setResult({
        ...r,
        updatedDate: dayjs(r.updatedDate),
      });
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  return { result, refresh };
};

export default useEspn;
