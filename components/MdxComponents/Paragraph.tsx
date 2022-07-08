import React from 'react';
import { Text } from '@citric/core';

interface Props {
    children: string
}
const Paragraph: React.FC<Props> = (props) => {
  return <Text gutterBottom mb={5}>{props.children}</Text>;
}

export default Paragraph;