import React from 'react';

import { Ripple } from '@/lib/material';

import NeutralRoundContinue from './web_neutral_rd_ctn.svg?react';

interface GoogleSigninProps {
    onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
}

export const GoogleSignin = (props: GoogleSigninProps) => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: '40px',
                borderRadius: '20px',
                cursor: 'pointer',
            }}
            onClick={props.onClick}
        >
            <Ripple />
            <NeutralRoundContinue />
        </div>
    );
};
