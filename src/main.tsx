import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import 'material-symbols';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import resetCss from 'reset-css/reset.css?inline';

import { App } from '@/app';

import './index.scss';

// mock server 설정
if (import.meta.env.DEV) {
    const { worker } = await import('@/testing/mocks/browser');
    await worker.start();
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
