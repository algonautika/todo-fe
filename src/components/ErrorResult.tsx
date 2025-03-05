import { Err } from 'neverthrow';

import { RestError } from '@/lib/api-client/types';

interface ErrorResultProps {
    err: Err<unknown, unknown> | RestError | Error;
}

export const ErrorResult = (props: ErrorResultProps) => {
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
                    props.err instanceof Err
                        ? String(props.err.error)
                        : props.err.message
                }
            </div>
        </div>
    );
};
