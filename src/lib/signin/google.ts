import { api } from '@/lib/api-client';

export function oauthSignIn() {
    if (import.meta.env.DEV) {
        api.get(`${import.meta.env.VITE_API_URL}/login/authorization/google`)
            .then((_response) => {
                window.location.replace('/');
            })
            .catch((error: unknown) => {
                console.error(error);
            });
    } else {

    }
}
