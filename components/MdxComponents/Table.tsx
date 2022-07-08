import React from 'react';
import {
    Table as TableCitric,
    Thead as TheadCitric, 
    Tbody as TbodyCitric,
    Tr as TrCitric,
    Th as ThCitric,
    Td as TdCitric,
} from '@citric/core';

interface Props {
    children: React.ReactNode
}

export const Table: React.FC<Props> = (props) => <TableCitric {...props} sx={{ my: 5 }} />
export const THead: React.FC<Props> = (props) => <TheadCitric {...props} />
export const TBody: React.FC<Props> = (props) => <TbodyCitric {...props} />
export const Tr: React.FC<Props> = (props) => <TrCitric {...props} />
export const Th: React.FC<Props> = (props) => <ThCitric {...props} />
export const Td: React.FC<Props> = (props) => <TdCitric {...props} />
