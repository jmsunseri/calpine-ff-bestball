import React, { FC } from 'react';
import TextTransition, { presets } from 'react-text-transition';

interface IFancyTextProps {
  text: string | number;
}

const FancyText: FC<IFancyTextProps> = ({ text }) => {
  return <TextTransition text={text} springConfig={presets.default} />;
};

export default FancyText;
