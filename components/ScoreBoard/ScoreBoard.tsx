import {
  Box,
  Heading,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from 'grommet';
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { getCurrentWeek } from '@api/utils';
import { Team } from '@api/models';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

interface IScoreBoardProps {
  teams: Team[];
}

interface ITeamStanding {
  name: string;
  total: number;
  logo?: string;
  benchTotal: number;
  minRemaining: number;
  benchMinRemaining: number;
}

const ScoreBoard: FC<IScoreBoardProps> = ({ teams }) => {
  const weekId = getCurrentWeek();

  return (
    <Box
      direction='column'
      elevation='small'
      round='small'
      pad='small'
      width={{ min: '400px', max: '600px' }}
    >
      <Heading level={3}>Score Board Week {weekId}</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col' border='bottom'>
              #
            </TableCell>
            <TableCell scope='col' border='bottom' colSpan={2}>
              Team
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Score
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Min
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams
            ?.map(
              (t: Team): ITeamStanding => {
                const thisWeekResult = t.weeklyResults.find(
                  (x) => x.weekId === weekId
                );
                return {
                  logo: t.logo,
                  name: `${t.teamName} (${t.firstName})`,
                  total: thisWeekResult?.startingTotal,
                  benchTotal: thisWeekResult?.benchTotal,
                  minRemaining: thisWeekResult?.startingMinutes,
                  benchMinRemaining: thisWeekResult?.benchMinutes,
                };
              }
            )
            .sort((a: ITeamStanding, b: ITeamStanding) => b.total - a.total)
            .map((teamStanding: ITeamStanding, index: number) => (
              <TableRow key={teamStanding.name}>
                <TableCell scope='row'>
                  <strong>{index + 1}</strong>
                </TableCell>
                <TableCell>
                  <Avatar src={teamStanding.logo} />
                </TableCell>
                <TableCell>
                  <FancyText text={teamStanding.name} />
                </TableCell>
                <TableCell>
                  <FancyText text={teamStanding.total?.toFixed(2) || 0} />
                </TableCell>
                <TableCell>
                  {(
                    teamStanding.minRemaining + teamStanding.benchMinRemaining
                  )?.toFixed(0) || '0'}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ScoreBoard;
