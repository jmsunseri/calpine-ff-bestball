import { TableCell, TableRow } from 'grommet';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

interface PlayerRowProps {
  name: string;
  position: string;
  total?: string;
  minutes?: string;
  projection?: string;
}

const FancyText = dynamic(() => import('@components/FancyText/FancyText'), {
  ssr: false,
  loading: () => <>...</>,
});

const PlayerRow: FC<PlayerRowProps> = ({
  name,
  position,
  total,
  minutes,
  projection,
}) => {
  return (
    <TableRow>
      <TableCell scope='row'>{name}</TableCell>
      <TableCell>{position}</TableCell>
      <TableCell>
        <FancyText text={total} />
      </TableCell>
      <TableCell>{minutes}</TableCell>
      <TableCell>{projection}</TableCell>
    </TableRow>
  );
};

export default PlayerRow;
