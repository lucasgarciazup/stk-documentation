import { Divider, Text } from '@citric/core';
import React from 'react';

// import { Container } from './styles';

interface Props {
    title: string,
    description: string
}
const MdxHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <>
        <Text appearance="h1" gutterBottom mb={5}>{title}</Text>
        <Text appearance="subtitle1" gutterBottom mb={10}>{description}</Text>
    </>
   );
}

export default MdxHeader;