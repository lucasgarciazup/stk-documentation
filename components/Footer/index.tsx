import React from 'react';
import { Box, Flex, Image, Link, Text } from '@citric/core/dist';
import LogoWhite from '../../assets/logo-white.svg';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg={'light.300'} sx={{ height: '200px'}}>
        <Flex alignItems="center" flexDirection='column' justifyContent="center" sx={{ height: "100%" }} >
            <Image src={LogoWhite} width={150} sx={{ mb: 10 }} />
            <Text>© {new Date().getFullYear()} StackSpot. Todos os direitos reservados</Text>
            <Link colorScheme="primary" href="https://insights.zup.com.br/politica-privacidade" target="_blank">Política de Privacidade</Link>
        </Flex>
    </Box>
  );
}

export default Footer;