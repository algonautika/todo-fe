import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import 'material-symbols';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import resetCss from 'reset-css/reset.css?inline';

import { App } from '@/app';

import './index.scss';

if (import.meta.env.DEV) {
    // mock server 설정
    const { worker } = await import('@/testing/mocks/browser');
    await worker.start();

    // eruda 활성화
    await import('eruda').then((eruda) => {
        eruda.default.init();
    });

    // chii 활성화
    const host = location.hostname;
    const chiiScript = document.createElement('script');
    chiiScript.src = `http://${host}:8080/target.js`;
    document.head.appendChild(chiiScript);
}

// reset css 적용
const cssStyleSheet = new CSSStyleSheet();
cssStyleSheet.replaceSync(`@layer {\n ${resetCss} \n} `);
document.adoptedStyleSheets.push(cssStyleSheet);

// material typescale css 적용
if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
}

const root = document.getElementById('root');

if (!root) {
    throw new Error('No root element found');
}

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
