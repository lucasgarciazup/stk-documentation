import * as React from "react"
import { Box, Container, Image, Text, ThemeProvider } from '@citric/core'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../assets/logo.svg'
import theme from '../theme'

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bg={'light.300'}>
        <Box p={10}>
          <Image src={Logo} width={150}/>
        </Box>
        <Box sx={{ mt: 50, mx: ['20%', '15%', '5%']}}>
          <Box sx={{ w: [6, 12]}}>
            <Text appearance="display1" weight="bold" gutterBottom>Documentação</Text>
            <Text appearance="display1" weight="light" gutterBottom>Stackspot</Text>
            <Text appearance="body1">Conheça mais sobre a plataforma, aprenda a criar e a usar a StackSpot para acelerar o desenvolvimento dos seus projetos.</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage
