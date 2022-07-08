import { Link, Text } from '@citric/core';

import React from 'react';

// import { Container } from './styles';
interface Props {
    href: string,
    children: string
}

const Anchor: React.FC<Props> = (props) => {
  return (
    <Link colorScheme="primary" {...props} />
  );
}

export default Anchor;