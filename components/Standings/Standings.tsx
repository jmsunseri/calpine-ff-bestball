import React, { FC } from 'react';
import { Team, WeeklyResult } from '../../pages/api/stats';
import {
  Box,
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Avatar,
  Table,
} from 'grommet';

interface IStandingsProps {
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
      result.Qb.total +
      result.Rb1.total +
      result.Rb2.total +
      result.Wr1.total +
      result.Wr2.total +
      result.Wr3.total +
      result.Te.total +
      result.Flex.total +
      result.SuperFlex.total
    );
  }
  return 0;
};

const Standings: FC<IStandingsProps> = ({ teams }) => {
  return (
    <Box direction='column'>
      <Heading level={3}>Standings</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col' border='bottom'>
              Rank
            </TableCell>
            <TableCell scope='col' border='bottom' colSpan={2}>
              Team
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Score
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams
            ?.map(
              (t: Team): ITeamStanding => ({
                logo: t.logo,
                name: `${t.teamName} (${t.firstName} ${t.lastName})`,
                total: t.weeklyResults.reduce(
                  (total: number, wr: WeeklyResult) =>
                    getStartingLineupTotal(wr) + total,
                  0
                ),
              })
            )
            .sort((a: ITeamStanding, b: ITeamStanding) => b.total - a.total)
            .map((teamStanding: ITeamStanding, index: number) => (
              <TableRow>
                <TableCell scope='row'>
                  <strong>{index + 1}</strong>
                </TableCell>
                <TableCell>
                  <Avatar src={teamStanding.logo} />
                </TableCell>
                <TableCell>{teamStanding.name}</TableCell>
                <TableCell>{teamStanding.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Standings;
