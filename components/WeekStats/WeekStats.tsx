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
          <TableCell scope='row'>{result?.qb.name}</TableCell>
          <TableCell>QB</TableCell>
          <TableCell>{result?.qb.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.rb1.name}</TableCell>
          <TableCell>RB</TableCell>
          <TableCell>{result?.rb1.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.rb2.name}</TableCell>
          <TableCell>RB</TableCell>
          <TableCell>{result?.rb2.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.wr1.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.wr1.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.wr2.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.wr2.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.wr3.name}</TableCell>
          <TableCell>WR</TableCell>
          <TableCell>{result?.wr3.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.te.name}</TableCell>
          <TableCell>TE</TableCell>
          <TableCell>{result?.te.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>{result?.flex.name}</TableCell>
          <TableCell>Flex</TableCell>
          <TableCell>{result?.flex.total.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row' border='bottom'>
            {result?.superFlex.name}
          </TableCell>
          <TableCell border='bottom'>Super Flex</TableCell>
          <TableCell border='bottom'>
            {result?.superFlex.total.toFixed(2)}
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
        {result?.bench.map((benchPlayer: PlayerResult, index: number) => (
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
            {result?.bench
              .reduce(
                (total: number, benchPlayer: PlayerResult) =>
                  total + benchPlayer.total,
                0
              )
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export default WeekStats;
