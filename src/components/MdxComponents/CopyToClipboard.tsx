import { IconBox, Link, Tooltip } from '@citric/core/dist';
import { Clone } from '@citric/icons/dist';
import React from 'react';
import { copyToClipboard } from '../../utils/copyToClipboard';

const TOOLTIP_TEXT = {
    COPY: 'Copiar',
    COPIED: 'Copiado!'
}
interface Props {
    text: string
    as?: 'a' | 'button'
}
const CopyToClipboard: React.FC<Props> = ({ text, as = 'a' }) => {
    const [tooltip, setTooltip] = React.useState(TOOLTIP_TEXT['COPY'])
    const copyLinkClipboard = () => {
        copyToClipboard(text);
        setTooltip(TOOLTIP_TEXT['COPIED'])
    }


    return (
        <Tooltip text={tooltip}>
            {as === 'button' && (
                <Link as='button' sx={{ mr: 3 }} onClick={copyLinkClipboard} onMouseLeave={() => setTooltip(TOOLTIP_TEXT['COPY'])}>
                    <Clone />
                </Link>
            )}
            {as === 'a' && (
                <Link as='a' href={text} sx={{ mr: 3 }} onClick={copyLinkClipboard} onMouseLeave={() => setTooltip(TOOLTIP_TEXT['COPY'])}>
                    <IconBox colorScheme="primary">
                        <Clone />
                    </IconBox>
                </Link>
            )}
        </Tooltip>
    )
}

export default CopyToClipboard;