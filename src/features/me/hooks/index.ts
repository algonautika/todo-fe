import { LazyValue } from '@/types/api';
import { User } from '@/types/model';
import { err, Result } from 'neverthrow';
import { useEffect, useState } from 'react';
import { getMe } from '../api';

export const useMe = () => {
    const [me, setMe] = useState<LazyValue<Result<User | null, Error>>>('Loading');

    useEffect(() => {
        getMe()
            .then((response) => {
                setMe(response);
            })
            .catch((error: unknown) => {
                setMe(err(new Error(String(error))));
            });
    }, []);

    return me;
};
