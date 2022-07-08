import React from 'react';
import { graphql } from 'gatsby';
import { Box, Flex, ThemeProvider } from '@citric/core';
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MdxComponents from '../components/MdxComponents';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/Toc';
import styled from 'styled-components';
import MdxHeader from '../components/MdxHeader';
import theme from '../theme';
import Footer from '../components/Footer';

interface Props {
  data: {
    mdx: {
      body: string,
      slug: string,
      frontmatter: {
        title: string,
        description: string
      }
      toc: any
    }
  }
}


const Layout: React.FC<Props> = (
  { 
    data: 
    { mdx: { 
      body,
      frontmatter,
      toc
    } 
  }
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Flex sx={{ minHeight: "90vh" }}>
        <Box as="aside" sx={{ w: [2, 2, 0]}}>
          <Sidebar />
        </Box>
        <Box as="main" sx={{ w: [8, 8, 12], p: 10, bg: 'light.500'}}>
          <MDXProvider components={MdxComponents} >
            <MdxHeader title={frontmatter.title} description={frontmatter.description}/>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Box>
        <Box as="aside" sx={{ w: [2, 2, 2]}}>
            <TableOfContents toc={toc} />
        </Box>
      </Flex>
      <Footer /> 
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        title
        description
      }
      toc: tableOfContents(maxDepth: 6)
    }
  }
`

export default Layout;