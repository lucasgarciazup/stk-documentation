import React from 'react';
import { Flex, Text } from '@citric/core';
import slugger from 'github-slugger'
import CopyToClipboard from './CopyToClipboard';
import { OneOfFontAppearances } from '@citric/core/dist/utils/theme.types';
import innerText from 'react-innertext';

type HeadingTag = OneOfFontAppearances

type HeadingProps = {
    children: React.ReactNode
    location: Location
}

function createHeading(tag: HeadingTag) {
    const Heading: React.FC<HeadingProps> = props => {

        const id = slugger.slug(innerText(props.children))
        console.log(props)
        const copyLink = new URL('https://docs.stackspot.com/docs');
        copyLink.hash = id;

        return (
            <Flex alignItems="center">
                <Text appearance={tag} id={id} {...props} gutterBottom sx={{ mr: 3 }}>
                    {props.children}
                </Text>
                <CopyToClipboard text={copyLink.href} />
            </Flex>
        )
    }

    return Heading
}

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');
 