import React, { FC } from 'react';
import { Team, WeeklyResult } from '@api/models';
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
import dynamic from 'next/dynamic';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

interface IStandingsProps {
  teams: Team[];
}

interface ITeamStanding {
  name: string;
  total: number;
  logo?: string;
}

const Standings: FC<IStandingsProps> = ({ teams }) => (
  <Box
    direction='column'
    flex
    elevation='small'
    round='small'
    pad='small'
    width={{ min: '400px', max: '600px' }}
  >
    <Heading level={3}>Standings</Heading>
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
            $$$
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams
          ?.map(
            (t: Team): ITeamStanding => ({
              logo: t.logo,
              name: `${t.teamName} (${t.firstName})`,
              total: t.weeklyResults.reduce(
                (total: number, wr: WeeklyResult) => wr.startingTotal + total,
                0
              ),
            })
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
                <FancyText text={teamStanding.total.toFixed(2)} />
              </TableCell>
              <TableCell>
                {index === 0
                  ? '$500'
                  : index === 1
                  ? '$200'
                  : index === 2
                  ? '$100'
                  : ''}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Box>
);

export default Standings;
