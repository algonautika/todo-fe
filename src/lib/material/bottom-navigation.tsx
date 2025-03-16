interface BottomNavigationProps {
    children: React.ReactNode;
}

export const BottomNavigation = ({
    children,
}: BottomNavigationProps) => {
    return (
        <div
            style={{
                width: '100%',
                height: '80px',
                padding: '12px 0 16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--md-sys-color-surface)',
            }}
        >
            { children }
        </div>
    );
};
