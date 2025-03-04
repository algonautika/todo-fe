import { GoogleSignin } from '@/components/oauth';
import { Scaffold } from '@/components/scaffold';
import { oauthSignIn } from '@/lib/signin/google';

export const Signin = () => {
    return (
        <Scaffold>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    placeContent: 'center',
                    placeItems: 'center',
                    flexFlow: 'column nowrap',
                    gap: '1rem',
                }}
            >
                <GoogleSignin
                    onClick={() => {
                        oauthSignIn();
                    }}
                />
            </div>
        </Scaffold>
    );
};
