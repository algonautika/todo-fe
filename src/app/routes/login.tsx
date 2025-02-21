import { GoogleSignin } from '@/components/oauth';

export const Signin = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <GoogleSignin />
        </div>
    );
};
