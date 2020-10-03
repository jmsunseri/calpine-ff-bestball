import React, { FC } from 'react';
import { Team, schedule, IScheduleItem, WeeklyResult } from '@api/models';
import {
  Box,
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Table,
  Avatar,
} from 'grommet';
import dynamic from 'next/dynamic';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

interface IHighScoresProps {
  teams: Team[];
}

const HighScores: FC<IHighScoresProps> = ({ teams }) => {
  const flatWeeklyResults =
    teams?.length &&
    teams.flatMap((t) =>
      t.weeklyResults.map((wr: WeeklyResult) => ({
        team: t,
        result: wr,
        total: wr.startingTotal || 0,
      }))
    );

  const seasonHighScore =
    flatWeeklyResults?.length &&
    flatWeeklyResults?.sort((a, b) => b.total - a.total)[0];

  return (
    <Box
      direction='column'
      flex
      elevation='small'
      round='small'
      pad='small'
      width={{ min: '400px', max: '600px' }}
    >
      <Heading level={3}>High Score Winners</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col' border='bottom'>
              Week
            </TableCell>
            <TableCell scope='col' border='bottom' colSpan={2}>
              Team
            </TableCell>
            <TableCell scope='col' border='bottom'>
              High Score
            </TableCell>
            <TableCell scope='col' border='bottom'>
              $$$
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((s: IScheduleItem) => {
            const highTeam =
              flatWeeklyResults?.length &&
              flatWeeklyResults
                ?.filter((t) => t.result.weekId === s.weekId)
                .sort((a, b) => b.total - a.total)[0];
            return (
              <TableRow key={s.weekId}>
                <TableCell scope='row'>{s.weekId}</TableCell>
                <TableCell>
                  {!!highTeam?.total && (
                    <Avatar src={highTeam?.team.logo} size='medium' />
                  )}
                </TableCell>
                <TableCell>
                  {highTeam?.total ? highTeam?.team.teamName : ''}
                </TableCell>
                <TableCell>
                  <FancyText
                    text={highTeam?.total ? highTeam.total.toFixed(2) : ''}
                  />
                </TableCell>
                <TableCell>{!!highTeam?.total ? '$20' : ''}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell border='top' scope='row'>
              Season
            </TableCell>
            <TableCell border='top'>
              <Avatar src={seasonHighScore?.team.logo} />
            </TableCell>
            <TableCell border='top'>
              <FancyText text={seasonHighScore?.team.teamName} />
            </TableCell>
            <TableCell border='top'>
              <FancyText text={seasonHighScore?.total.toFixed(2)} />
            </TableCell>
            <TableCell border='top'>{!!seasonHighScore ? '$80' : ''}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default HighScores;
