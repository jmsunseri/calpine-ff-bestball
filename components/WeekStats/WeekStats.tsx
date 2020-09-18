import React, { FC } from 'react';
import { WeeklyResult, PlayerResult } from '../../pages/api/stats';
import TextTransition, { presets } from 'react-text-transition';
import { Position } from '../../pages/api/stats';
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

const getPostion = (pos: Position): string => {
  switch (pos) {
    case Position.QB:
      return 'QB';
    case Position.RB:
      return 'RB';
    case Position.WR:
      return 'WR';
    default:
      return 'TE';
  }
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
            <TextTransition
              text={result?.qb.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>QB</TableCell>
          <TableCell>
            <TextTransition
              text={result?.qb.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.rb1.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>RB</TableCell>
          <TableCell>
            <TextTransition
              text={result?.rb1.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.rb2.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>RB</TableCell>
          <TableCell>
            <TextTransition
              text={result?.rb2.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.wr1.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <TextTransition
              text={result?.wr1.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.wr2.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <TextTransition
              text={result?.wr2.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.wr3.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>WR</TableCell>
          <TableCell>
            <TextTransition
              text={result?.wr3.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.te.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>TE</TableCell>
          <TableCell>
            <TextTransition
              text={result?.te.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.flex.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>Flex</TableCell>
          <TableCell>
            <TextTransition
              text={result?.flex.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>
            <TextTransition
              text={result?.superFlex.name}
              springConfig={presets.wobbly}
            />
          </TableCell>
          <TableCell>Super Flex</TableCell>
          <TableCell>
            <TextTransition
              text={result?.superFlex.total.toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row'>Total</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <TextTransition
              text={getStartingLineupTotal(result).toFixed(2)}
              springConfig={presets.wobbly}
            />
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
              <TextTransition
                text={benchPlayer.name}
                springConfig={presets.wobbly}
              />
            </TableCell>
            <TableCell>
              <TextTransition
                text={getPostion(benchPlayer.position)}
                springConfig={presets.wobbly}
              />
            </TableCell>
            <TableCell>
              <TextTransition
                text={benchPlayer.total.toFixed(2)}
                springConfig={presets.wobbly}
              />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell border='top' scope='row'>
            Total
          </TableCell>
          <TableCell border='top'></TableCell>
          <TableCell border='top'>
            <TextTransition
              text={result?.bench
                .reduce(
                  (total: number, benchPlayer: PlayerResult) =>
                    total + benchPlayer.total,
                  0
                )
                .toFixed(2)}
              springConfig={presets.wobbly}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
);

export default WeekStats;
