/// <reference types="vitest" />

import msw from '@iodigital/vite-plugin-msw';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import vitePluginSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { handlers } from './src/mocks/node/handlers';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        vitePluginSvgr(),
        // msw({
        //     handlers,
        //     mode: 'node',
        // }),
    ],
});
