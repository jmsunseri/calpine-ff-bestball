import { PlayerResult, WeeklyResult } from '@api/models';
import { Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import React, { FC } from 'react';
import Highlighter from './Highlighter/Highlighter';

interface DriveTableProps {
  weeklyResult: WeeklyResult;
}

const BenchDriveTable: FC<DriveTableProps> = ({ weeklyResult }) => {
  return (
    <Table alignSelf='stretch' style={{ width: '100%' }}>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={5}>Player Name</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {weeklyResult.bench.map((benchPlayer: PlayerResult) => (
          <Highlighter
            yardsToGo={benchPlayer.yardToGo}
            hasBall={benchPlayer.hasBall}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default BenchDriveTable;
