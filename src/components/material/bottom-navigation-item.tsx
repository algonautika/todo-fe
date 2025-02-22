import { useEffect, useRef } from 'react';
import { Icon, Ripple } from './primitive';
import { MdRipple } from '@material/web/all';

interface BottomNavigationItemProps {
    icon: string;
    label: string;
    selected?: boolean;
}
interface BottomNavigationItemProps {
    icon: string;
    label: string;
    selected?: boolean;
}

export const BottomNavigationItem = ({
    icon,
    label,
    selected = false,
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
                flexDirection: 'column',
                cursor: 'pointer',
                alignItems: 'center',
                gap: '4px',
                minWidth: '48px',
            }}
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
                    {icon}
                </Icon>
                <Ripple ref={ref} />
            </div>
            <span
                className="md-typescale-label-medium"
                style={{
                    color: selected
                        ? 'var(--md-sys-color-primary)'
                        : 'var(--md-sys-color-on-surface)',
                }}
            >
                {label}
            </span>
        </div>
    );
};
