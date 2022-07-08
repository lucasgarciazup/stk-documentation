import React from 'react';

import Logo from '../../assets/logo.svg';
import { Box, Container, Link as LinkCitric, Dropdown, DropdownItem, Flex, Image, Option, Select, Text } from '@citric/core';
import { SxProp } from '@citric/core/dist/component-style';
import { Link } from 'gatsby';

const styles: Record<string, SxProp> = {
  header: {
    px: 10,
    height: '10vh',
    bg: 'light.300'
  },
  menu: {
    alignItems: 'center',
    display: 'flex',
    gap: '20px'
  },
  dropdown: {
    position: 'absolute',
  }
}

const Navbar: React.FC = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Flex sx={styles.header}>
      <Flex justifyContent="space-between" alignItems="center" w={100}>
        <Link to='/' replace>
          <Image src={Logo} alt="logo" width={200} />
        </Link>
        <Box sx={styles.menu}>
          <LinkCitric 
            textDecoration="none" 
            as={(props: any): any => <Link {...props} to="/docs/glossary"/>}
          >
            Glossário
          </LinkCitric>
          <LinkCitric 
            textDecoration="none" 
            as={(props: any): any => <Link {...props} to="/docs/faq"/>}
          >
            FAQ
          </LinkCitric>
          <Box>
            <Text appearance="body1" onClick={() => setVisible(true)}>Versões</Text>
            <Dropdown visible={visible}  onClose={() => setVisible(false)} sx={styles.dropdown}>
              <DropdownItem>v3.6.9</DropdownItem>
            </Dropdown>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar;