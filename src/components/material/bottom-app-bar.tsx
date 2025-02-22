import { useEffect, useRef } from 'react';
import { Icon, IconButton, Ripple } from '.';
import { Typography } from './typography';
import { MdRipple } from '@material/web/all';

interface BottomAppBarProps {
    type: 'center-aligned';
    title: string;
}

export const BottomAppBar = (props: BottomAppBarProps) => {
    const ref = useRef<MdRipple>(null);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return;
        ref.current?.attach(divRef.current);
    }, [divRef]);

    return (
        <div
            style={{
                width: '100%',
                height: '80px',
                padding: '0 16px 0 12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--md-sys-color-container)',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    alignContent: 'center',
                    gap: '4px',
                }}
            >
                <div
                    ref={divRef}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '64px',
                        height: '32px',
                        borderRadius: '16px',
                        position: 'relative',
                    }}
                >
                    <Icon
                        style={{
                            width: '24px',
                            color: 'var(--md-sys-color-on-surface)',
                        }}
                    >
                        search
                    </Icon>
                    <Ripple ref={ref} />
                </div>
                <span>오늘 할 일</span>
            </div>
        </div>
    );
};
