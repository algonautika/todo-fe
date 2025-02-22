import { Ripple } from '@/components/material';
import NeutralRoundContinue from './web_neutral_rd_ctn.svg?react';
import React from 'react';

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
