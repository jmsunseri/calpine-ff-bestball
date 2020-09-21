import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { WeeklyResult, PlayerResult } from '@api/stats';
import { Position } from '@api/stats';
import {
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Table,
} from 'grommet';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

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
          <TableCell scope='row'>
            <FancyText text={result?.qb.name} />
          </TableCell>
          <TableCell>QB</TableCell>
          <TableCell>
            <FancyText text={result?.qb.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.rb1.name} />
          </TableCell>
          <TableCell>RB</TableCell>
          <TableCell>
            <FancyText text={result?.rb1.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.rb2.name} />
          </TableCell>
          <TableCell>RB</TableCell>
          <TableCell>
            <FancyText text={result?.rb2.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.wr1.name} />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <FancyText text={result?.wr1.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.wr2.name} />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <FancyText text={result?.wr2.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.wr3.name} />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <FancyText text={result?.wr3.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.te.name} />
          </TableCell>
          <TableCell>TE</TableCell>
          <TableCell>
            <FancyText text={result?.te.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.flex.name} />
          </TableCell>
          <TableCell>Flex</TableCell>
          <TableCell>
            <FancyText text={result?.flex.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <FancyText text={result?.superFlex.name} />
          </TableCell>
          <TableCell>Super Flex</TableCell>
          <TableCell>
            <FancyText text={result?.superFlex.total.toFixed(2)} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>Total</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <FancyText text={getStartingLineupTotal(result).toFixed(2)} />
          </TableCell>
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
            <TableCell scope='row'>
              <FancyText text={benchPlayer.name} />
            </TableCell>
            <TableCell>
              <FancyText text={Position[benchPlayer.position].toString()} />
            </TableCell>
            <TableCell>
              <FancyText text={benchPlayer.total.toFixed(2)} />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell border='top' scope='row'>
            Total
          </TableCell>
          <TableCell border='top'></TableCell>
          <TableCell border='top'>
            <FancyText
              text={result?.bench
                .reduce(
                  (total: number, benchPlayer: PlayerResult) =>
                    total + benchPlayer.total,
                  0
                )
                .toFixed(2)}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export default WeekStats;
