import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';
import { WeeklyResult, PlayerResult } from '@api/models';
import {
  Heading,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Table,
  Stack,
} from 'grommet';
import PlayerRow from './PlayerRow/PlayerRow';
import DriveTable from './DriveTable/DriveTable';
import { Position } from '@api/espn-models';
import BenchDriveTable from './DriveTable/BenchDriveTable';

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

interface IWeekStatsProps {
  result: WeeklyResult;
}

const WeekStats: FC<IWeekStatsProps> = ({ result }) => (
  <>
    <Heading level={3}>Starting Lineup</Heading>
    <Stack guidingChild='last' interactiveChild='last'>
      {result && <DriveTable weeklyResult={result} />}

      <Table style={{ width: '100%' }}>
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
            <TableCell scope='col' border='bottom'>
              Min
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Proj.
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <PlayerRow
            name={result?.qb.name}
            position='QB'
            minutes={result?.qb.minutes?.toFixed(0)}
            projection={result?.qb.projection?.toFixed(0)}
            total={result?.qb.total?.toFixed(2)}
          />
          <PlayerRow
            name={result?.rb1.name}
            position='RB'
            minutes={result?.rb1.minutes?.toFixed(0)}
            projection={result?.rb1.projection?.toFixed(0)}
            total={result?.rb1.total?.toFixed(2)}
          />
          <PlayerRow
            name={result?.rb2.name}
            position='RB'
            minutes={result?.rb2.minutes?.toFixed(0)}
            projection={result?.rb2.projection?.toFixed(0)}
            total={result?.rb2.total?.toFixed(2)}
          />
          <PlayerRow
            name={result?.wr1.name}
            position='WR'
            minutes={result?.wr1.minutes?.toFixed(0)}
            projection={result?.wr1.projection?.toFixed(0)}
            total={result?.wr1.total?.toFixed(2)}
          />

          <PlayerRow
            name={result?.wr2.name}
            position='WR'
            minutes={result?.wr2.minutes?.toFixed(0)}
            projection={result?.wr2.projection?.toFixed(0)}
            total={result?.wr2.total?.toFixed(2)}
          />

          <PlayerRow
            name={result?.wr3.name}
            position='WR'
            minutes={result?.wr3.minutes?.toFixed(0)}
            projection={result?.wr3.projection?.toFixed(0)}
            total={result?.wr3.total?.toFixed(2)}
          />
          <PlayerRow
            name={result?.te.name}
            position='TE'
            minutes={result?.te.minutes?.toFixed(0)}
            projection={result?.te.projection?.toFixed(0)}
            total={result?.te.total?.toFixed(2)}
          />

          <PlayerRow
            name={result?.flex.name}
            position='Flex'
            minutes={result?.flex.minutes?.toFixed(0)}
            projection={result?.flex.projection?.toFixed(0)}
            total={result?.flex.total?.toFixed(2)}
          />
          <PlayerRow
            name={result?.superFlex.name}
            position='Super Flex'
            minutes={result?.superFlex.minutes?.toFixed(0)}
            projection={result?.superFlex.projection?.toFixed(0)}
            total={result?.superFlex.total?.toFixed(2)}
          />
          <TableRow>
            <TableCell border='top' scope='row' colSpan={2}>
              Total
            </TableCell>
            <TableCell border='top'>
              <FancyText text={result?.startingTotal?.toFixed(2)} />
            </TableCell>
            <TableCell border='top'>
              {result?.startingMinutes.toFixed(0)}
            </TableCell>
            <TableCell border='top'>
              <FancyText text={result?.projectedStartingTotal?.toFixed(0)} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
    <Heading level={3}>Bench</Heading>
    <Stack guidingChild='last' interactiveChild='last'>
      {result && <BenchDriveTable weeklyResult={result} />}

      <Table style={{ width: '100%' }}>
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
            <TableCell scope='col' border='bottom'>
              Min
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Proj.
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result?.bench.map((benchPlayer: PlayerResult, index: number) => (
            <Fragment key={benchPlayer.name}>
              <PlayerRow
                name={benchPlayer.name}
                position={Position[benchPlayer.position].toString()}
                minutes={benchPlayer.minutes?.toFixed(0)}
                projection={benchPlayer.projection?.toFixed(0)}
                total={benchPlayer.total?.toFixed(2)}
              />
            </Fragment>
          ))}
          <TableRow>
            <TableCell border='top' scope='row'>
              Total
            </TableCell>
            <TableCell border='top'></TableCell>
            <TableCell border='top'>
              <FancyText text={result?.benchTotal?.toFixed(2)} />
            </TableCell>
            <TableCell border='top'>
              {result?.benchMinutes?.toFixed(0)}
            </TableCell>
            <TableCell border='top'>
              <FancyText text={result?.projectedBenchTotal?.toFixed(0)} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  </>
);

export default WeekStats;
