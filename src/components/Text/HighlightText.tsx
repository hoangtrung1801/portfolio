import { TextProps } from '@chakra-ui/react';
import React from 'react';
import NormalText from './NormalText';

const HighLightText: React.FunctionComponent<TextProps> = ({ children }): JSX.Element => (
  <NormalText fontWeight="bold" color="textDefault.dark" as="span">
    {children}
  </NormalText>
);

export default HighLightText;