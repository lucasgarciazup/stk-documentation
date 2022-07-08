import { Text } from '@citric/core';
import React from 'react';

// import { Container } from './styles';
interface Props {
    children: string
}
const InlineCode: React.FC<Props> = (props) => {
  return (
    <Text as="code" appearance="code2" sx={{ bg: 'rgb(0,0,0,0.5)', p: 3, borderRadius: 'xs' }}>
      {props.children}
    </Text>
  );
}

export default InlineCode;