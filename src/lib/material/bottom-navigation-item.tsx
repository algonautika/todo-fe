import { MdRipple } from '@material/web/all';
import { useEffect, useRef } from 'react';

import { Icon, Ripple } from './primitive';

interface BottomNavigationItemProps {
    icon: string;
    label: string;
    selected?: boolean;
    onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
}

export const BottomNavigationItem = ({
    icon,
    label,
    selected = false,
    onClick,
}: BottomNavigationItemProps) => {
    const ref = useRef<MdRipple>(null);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divRef.current) return;
        ref.current?.attach(divRef.current);
    }, [divRef]);

    return (
        <div
            ref={divRef}
            style={{
                display: 'flex',
                flexGrow: 1,
                flex: '1 0 auto',
                flexFlow: 'column nowrap',
                cursor: 'pointer',
                alignItems: 'center',
                gap: '4px',
                minWidth: '48px',
            }}
            onClick={onClick}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '64px',
                    height: '32px',
                    borderRadius: '16px',
                    position: 'relative',
                    backgroundColor: selected
                        ? 'var(--md-sys-color-primary-container)'
                        : 'transparent',
                }}
            >
                <Icon
                    style={{
                        width: '24px',
                        height: '24px',
                        color: selected
                            ? 'var(--md-sys-color-primary)'
                            : 'var(--md-sys-color-on-surface)',
                    }}
                >
                    { icon }
                </Icon>
                <Ripple ref={ref} />
            </div>
            <span
                className="md-typescale-label-medium"
                style={{
                    color: selected
                        ? 'var(--md-sys-color-primary)'
                        : 'var(--md-sys-color-on-surface)',
                    fontWeight: selected ? 'bold' : 'normal',
                }}
            >
                { label }
            </span>
        </div>
    );
};
