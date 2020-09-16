import React, { FC } from 'react';
import { WeeklyResult, PlayerResult } from '../../pages/api/stats';
import {
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Table,
} from 'grommet';

interface IWeekStatsProps {
  result: WeeklyResult;
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

const WeekStats: FC<IWeekStatsProps> = ({ result }) => (
  <>
    <Heading level={3}>Starting Lineup</Heading>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'>
            Player Name
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Position
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Score
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope='row'>{result?.Qb.name}</TableCell>
          <TableCell>QB</TableCell>
          <TableCell>{result?.Qb.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Rb1.name}</TableCell>
          <TableCell>RB</TableCell>
          <TableCell>{result?.Rb1.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Rb2.name}</TableCell>
          <TableCell>RB</TableCell>
          <TableCell>{result?.Rb2.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Wr1.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.Wr1.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Wr2.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.Wr2.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Wr3.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.Wr3.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Te.name}</TableCell>
          <TableCell>TE</TableCell>
          <TableCell>{result?.Te.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.Flex.name}</TableCell>
          <TableCell>Flex</TableCell>
          <TableCell>{result?.Flex.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row' border='bottom'>
            {result?.SuperFlex.name}
          </TableCell>
          <TableCell border='bottom'>Super Flex</TableCell>
          <TableCell border='bottom'>
            {result?.SuperFlex.total.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>Total</TableCell>
          <TableCell></TableCell>
          <TableCell>{getStartingLineupTotal(result).toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Heading level={3}>Bench</Heading>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'>
            Player Name
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Position
          </TableCell>
          <TableCell scope='col' border='bottom'>
            Score
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result?.Bench.map((benchPlayer: PlayerResult, index: number) => (
          <TableRow key={benchPlayer.name}>
            <TableCell scope='row'>{benchPlayer.name}</TableCell>
            <TableCell>{benchPlayer.position}</TableCell>
            <TableCell>{benchPlayer.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell border='top' scope='row'>
            Total
          </TableCell>
          <TableCell border='top'></TableCell>
          <TableCell border='top'>
            {result?.Bench.reduce(
              (total: number, benchPlayer: PlayerResult) =>
                total + benchPlayer.total,
              0
            ).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export default WeekStats;
