/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_GOOGLE_OAUTH2_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
