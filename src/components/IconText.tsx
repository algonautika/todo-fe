import { Icon } from '@/lib/material';

interface IconTextPorps {
    icon: string;
    text: string;
}

export const IconText = ({ icon, text }: IconTextPorps) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}
        >
            <Icon>
                { icon }
            </Icon>
            <span className="md-typescale-label-large">{ text }</span>
        </div>
    );
};
