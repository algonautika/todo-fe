import { App } from '@/app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

const root = document.getElementById('root');

if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
}

if (!root) {
    throw new Error('No root element found');
}

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
