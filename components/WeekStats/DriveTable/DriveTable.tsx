import { WeeklyResult } from '@api/models';
import { Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import React, { FC } from 'react';
import Highlighter from './Highlighter/Highlighter';

interface DriveTableProps {
  weeklyResult: WeeklyResult;
}

const DriveTable: FC<DriveTableProps> = ({ weeklyResult }) => {
  return (
    <Table alignSelf='stretch' style={{ width: '100%' }}>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={5}>Player Name</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Highlighter
          yardsToGo={weeklyResult.qb.yardToGo}
          hasBall={weeklyResult.qb.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.rb1.yardToGo}
          hasBall={weeklyResult.rb1.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.rb2.yardToGo}
          hasBall={weeklyResult.rb2.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.wr1.yardToGo}
          hasBall={weeklyResult.wr1.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.wr2.yardToGo}
          hasBall={weeklyResult.wr2.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.wr3.yardToGo}
          hasBall={weeklyResult.wr3.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.te.yardToGo}
          hasBall={weeklyResult.te.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.flex.yardToGo}
          hasBall={weeklyResult.flex.hasBall}
        />
        <Highlighter
          yardsToGo={weeklyResult.superFlex.yardToGo}
          hasBall={weeklyResult.superFlex.hasBall}
        />
      </TableBody>
    </Table>
  );
};

export default DriveTable;
