import { IResult } from '../pages/api/stats';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';

export interface IUseEspnResult {
  result: IResult;
}

type UseEspnHook = () => IUseEspnResult;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const useEspn: UseEspnHook = () => {
  const [result, setResult] = useState<IResult>({ teams: [] });

  const { data, error } = useSWR<IResult>('/api/stats', fetcher, {
    refreshInterval: 15000,
  });

  useEffect(() => {
    if (data) {
      setResult({ ...data, updatedDate: dayjs(data.updatedDate) });
    }
  }, [data]);

  return { result };
};

export default useEspn;
