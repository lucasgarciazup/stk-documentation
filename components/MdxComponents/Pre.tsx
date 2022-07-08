import { Flex } from '@citric/core/dist';
import React from 'react';
import CopyToClipboard from './CopyToClipboard';
import innerText from 'react-innertext';
interface Props {
    children: React.ReactNode
}

const Pre: React.FC<Props> = (props) => {
    return (
        <Flex
            as="pre"
            alignItems="center"
            justifyContent="space-between"
            sx={{ bg: 'rgb(0,0,0,5)', my: 5, p: 5, borderRadius: 'sm' }}
        >
            {props.children}
            <CopyToClipboard text={innerText(props.children)} as="button"/>
        </Flex>
    );
}

export default Pre;