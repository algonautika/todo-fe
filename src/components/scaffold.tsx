interface ScaffoldProps {
    topAppBar?: React.ReactNode;
    bottomBar?: React.ReactNode;
    floatingActionButton?: React.ReactNode;
    children?: React.ReactNode;
}

export const Scaffold = (props: ScaffoldProps) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'column nowrap',
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                }}
            >

                { props.topAppBar }

            </div>

            <div
                style={{
                    width: '100%',
                    minHeight: 0,
                    flexGrow: 1,
                    position: 'relative',
                    backgroundColor: 'var(--md-sys-color-surface)',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        overflowY: 'hidden',
                    }}
                >
                    { props.children }
                </div>

                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        right: '16px',
                        bottom: '16px',
                    }}
                >
                    { props.floatingActionButton }
                </div>

            </div>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                }}
            >

                { props.bottomBar }

            </div>
        </div>
    );
};
