import { MDXProviderComponentsProp } from '@mdx-js/react';
import Alert from './Alert';
import Anchor from './Anchor';
import Code from './Code';
import Divider from './Divider';
import { H1, H2, H3, H4, H5, H6 } from './Heading';
import InlineCode from './InlineCode';
import Paragraph from './Paragraph';
import Pre from './Pre';
import { Table, THead, TBody, Tr, Th, Td } from './Table';
import { Tabs, TabItem } from './Tabs';

const MdxComponents: MDXProviderComponentsProp = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: Anchor,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: Tr,
  th: Th,
  td: Td,
  alert: Alert,
  tabs: Tabs,
  tab: TabItem,
  hr: Divider
}

export default MdxComponents