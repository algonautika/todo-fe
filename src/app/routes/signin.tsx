import { Scaffold } from '@/components/scaffold';
import { GoogleSignin } from '@/components/oauth';
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
                    flexDirection: 'column',
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
