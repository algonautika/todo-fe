import { Ripple } from '@/components/material';
import NeutralRoundContinue from './web_neutral_rd_ctn.svg?react';

export const GoogleSignin = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '40px',
                borderRadius: '20px',
                cursor: 'pointer',
            }}
        >
            <Ripple />
            <NeutralRoundContinue />
        </div>
    );
};
