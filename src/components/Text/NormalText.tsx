import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

const NormalText: React.FunctionComponent<TextProps> = ({
  children,
  ...props
}) => (
  <Text
    fontSize="1.1em"
    lineHeight="1.8rem"
    color="textDefault.darker"
    {...props}
  >
    {children}
  </Text>
);

export default NormalText;