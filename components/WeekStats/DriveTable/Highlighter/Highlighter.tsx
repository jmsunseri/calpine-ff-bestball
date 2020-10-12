import { Grommet, RangeSelector, TableCell, TableRow } from 'grommet';
import { deepMerge } from 'grommet/utils';
import React, { FC } from 'react';
import theme from 'theme';

interface HighlighterProps {
  yardsToGo: number;
  hasBall: boolean;
  gameOver: boolean;
}

const customEdge = deepMerge(theme, {
  rangeSelector: {
    edge: {
      type: <div></div>,
    },
  },
});

const Highlighter: FC<HighlighterProps> = ({
  yardsToGo,
  hasBall,
  gameOver,
}) => {
  return (
    <TableRow>
      <TableCell colSpan={5}>
        <Grommet theme={customEdge}>
          <RangeSelector
            direction='horizontal'
            invert={false}
            min={0}
            max={100}
            size='medium'
            round='xsmall'
            values={[0, 100 - yardsToGo]}
            color={
              hasBall && !gameOver
                ? 100 - yardsToGo > 79
                  ? 'status-critical'
                  : 'status-ok'
                : 'white'
            }
            opacity='weak'
          />
        </Grommet>
      </TableCell>
    </TableRow>
  );
};

export default Highlighter;
