import { Typography } from './typography';

import { Icon, IconButton } from '.';

interface TopAppBarProps {
    type: 'center-aligned';
    title: string;
}

export const TopAppBar = (props: TopAppBarProps) => {
    return (
        <div
            style={{
                width: '100%',
                height: '64px',
                padding: '0 16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                backgroundColor: 'var(--md-sys-color-surface)',
            }}
        >
            <IconButton>
                <Icon
                    style={{
                        color: 'var(--md-sys-color-on-surface)',
                    }}
                >
                    menu
                </Icon>
            </IconButton>

            <div
                style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <Typography
                    scale="title"
                    size="large"
                >
                    { props.title }
                </Typography>
            </div>

            <IconButton>
                <Icon
                    style={{
                        color: 'var(--md-sys-color-on-surface)',
                    }}
                >
                    search
                </Icon>
            </IconButton>
        </div>
    );
};
