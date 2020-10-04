import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import { repopulateCache } from '@api/utils';
import { IResult } from '@api/models';

const stats = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const teams = await repopulateCache();
    const result: IResult = { teams, fullRefresh: dayjs() };
    res.status(200).json(result);
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
  }
};

export default stats;
