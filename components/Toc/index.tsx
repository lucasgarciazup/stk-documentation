import React from 'react'
import { Box, Flex, Link, Text } from '@citric/core'

type TocItem = {
  url: string,
  title: string,
  items: TocItem[]
}

export type TOC = {
  items: TocItem[]
}

type TableOfContentsProps = {
  toc: TOC
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {

  const tocItems = toc.items

  if (!tocItems) {
    console.warn("There's no heading to render for toc")
    return null;
  }
  const createTree = (items: TocItem[]) => {
    return (
      <Flex as="ul" px={5} flexDirection="column">
        {items.map(({ url, title, items }, index) => (
          <Flex as="li" key={index} sx={{ p: 3 }}>
            {url && <Link textDecoration="none" href={url}>{title}</Link>}
            {items && createTree(items)}
          </Flex>
        ))}
      </Flex>
    )
  }
  return (
    <Box mt={5}>
      <Text appearance="overheader1" ml={5} gutterBottom>Nesta página</Text>
      {createTree(tocItems)}
    </Box>
  )
}
export default React.memo(TableOfContents) 