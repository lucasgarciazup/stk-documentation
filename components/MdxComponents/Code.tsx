import { Text } from '@citric/core';
import React from 'react';

interface Props {
    children: string
}

const Code: React.FC<Props> = (props) => {
  return (
    <Text as="code" appearance="code1" sx={{ p: 3, borderRadius: 'xs' }}>
      {props.children}
    </Text>
  );
}

export default Code;