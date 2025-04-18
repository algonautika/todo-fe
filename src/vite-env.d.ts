/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_API_HOST: string;
    readonly VITE_API_URL: string;
    readonly VITE_CHII_PORT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
