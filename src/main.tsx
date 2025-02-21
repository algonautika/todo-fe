import { App } from '@/app';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import 'material-symbols';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

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
