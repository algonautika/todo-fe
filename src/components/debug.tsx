interface DebugProps {
    message: string;
};

export const Debug = (props: DebugProps) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 'fit-content',
                height: 'fit-content',
                padding: '1rem',
                margin: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                zIndex: 9999,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                fontFamily: 'Consolas',
                borderRadius: '5px',
                touchAction: 'none',
                pointerEvents: 'none',
            }}
        >
            <pre>
                { props.message }
            </pre>
        </div>
    );
};
