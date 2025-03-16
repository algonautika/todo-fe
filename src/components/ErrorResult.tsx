import { useCallback, useEffect } from 'react';

interface ErrorResultProps {
    err: Error;
}

export const ErrorResult = (props: ErrorResultProps) => {
    const toStr = useCallback((err: Error) => {
        console.error(err);

        return ''; // TODO: Implement
    }, []);

    useEffect(() => {
        console.error(props.err);
    }, [props.err]);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'column nowrap',
                placeContent: 'start',
                placeItems: 'start',
            }}
        >
            <div>
                Error
            </div>
            <div>
                {
                    toStr(props.err)
                }
            </div>
        </div>
    );
};
