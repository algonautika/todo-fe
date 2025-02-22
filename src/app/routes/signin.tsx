import { Scaffold } from '@/components/scaffold';
import { GoogleSignin } from '@/components/oauth';

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
                }}
            >
                <GoogleSignin />
            </div>
        </Scaffold>
    );
};
