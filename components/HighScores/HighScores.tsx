import React, { FC } from 'react';
import { Team, WeeklyResult, schedule, IScheduleItem } from '@api/stats';
import {
  Box,
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Table,
} from 'grommet';
import dynamic from 'next/dynamic';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

interface IHighScoresProps {
  teams: Team[];
}

interface ITeamStanding {
  name: string;
  total: number;
  logo?: string;
}

const getStartingLineupTotal = (result?: WeeklyResult): number => {
  if (result) {
    return (
      result.qb.total +
      result.rb1.total +
      result.rb2.total +
      result.wr1.total +
      result.wr2.total +
      result.wr3.total +
      result.te.total +
      result.flex.total +
      result.superFlex.total
    );
  }
  return 0;
};

const HighScores: FC<IHighScoresProps> = ({ teams }) => {
  const calcdTeams = teams.flatMap((t) =>
    t.weeklyResults.map((wr) => ({
      team: t,
      result: wr,
      total: getStartingLineupTotal(wr),
    }))
  );

  const seasonHighScore = calcdTeams.sort((a, b) => b.total - a.total)[0];

  return (
    <Box direction='column'>
      <Heading level={3}>High Score Winners</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col' border='bottom'>
              Week
            </TableCell>
            <TableCell scope='col' border='bottom'>
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
            const highTeam = calcdTeams
              .filter((t) => t.result.weekId === s.weekId)
              .sort((a, b) => b.total - a.total)[0];
            return (
              <TableRow key={s.weekId}>
                <TableCell scope='row'>{s.weekId}</TableCell>
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
