import React from 'react';

interface AppProviderProps {
    children: React.ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
    return (
        <>
            { props.children }
        </>
    );
};
