import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';

interface AppProviderProps {
    children: React.ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
    const queryClient = useMemo(() => {
        return new QueryClient();
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                { props.children }
            </QueryClientProvider>
        </>
    );
};
