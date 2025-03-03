import { LazyValue } from '@/lib/api-client/types';
import { err } from 'neverthrow';
import { useEffect, useState } from 'react';
import { getMe } from '../api';

export const useMe = () => {
    const [me, setMe] = useState<LazyValue<Awaited<ReturnType<typeof getMe>>>>('Loading');

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
