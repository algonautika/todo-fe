interface ScaffoldProps {
    topAppBar?: React.ReactNode;
    bottomBar?: React.ReactNode;
    floatingActionButton?: React.ReactNode;
    children: React.ReactNode;
}

export const Scaffold = (props: ScaffoldProps) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {props.topAppBar}

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    backgroundColor: 'var(--md-sys-color-surface)',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {props.children}
                </div>

                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        right: '16px',
                        bottom: '16px',
                    }}
                >
                    {props.floatingActionButton}
                </div>

            </div>

            {props.bottomBar}

        </div>
    );
};
