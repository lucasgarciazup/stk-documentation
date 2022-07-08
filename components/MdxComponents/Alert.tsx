import React from 'react';
import { Alert as AlertCitric, Text } from '@citric/core';
import { OneOfColorSchemes } from '@citric/core/dist/utils/theme.types';

// import { Container } from './styles';
interface Props {
    color: OneOfColorSchemes
    children: string
}

const Alert: React.FC<Props> = ({
    color = 'primary',
    children
}) => {
    return (
        <AlertCitric colorScheme={color} sx={{ my: 5 }}>
            <Text
                appearance="body2"
                colorScheme={`${color}.contrastText`}
                weight="regular"
            >{children}</Text>
        </AlertCitric>
    );
}

export default Alert;