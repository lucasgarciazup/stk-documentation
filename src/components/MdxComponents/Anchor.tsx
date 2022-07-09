import React from 'react';
import { Link } from '@citric/core';

interface Props {
    href: string,
    children: string
}

const Anchor: React.FC<Props> = (props) => {
  const decoded = decodeURI(props.href)
  return (
    <Link colorScheme="primary" {...props} />
  );
}

export default Anchor;