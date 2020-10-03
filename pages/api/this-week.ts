import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import { IResult } from 'api/models';
import { getCurrentWeek, getTeams } from 'api/utils';

const thisWeek = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const weekId = getCurrentWeek();
    if (weekId) {
      const teams = await getTeams(weekId, true);
      const result: IResult = { teams, updatedDate: dayjs() };
      res.status(200).json(result);
    }
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
  }
};

export default thisWeek;
