import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';
import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
    // hex color로부터 테마를 가져옴
    const theme = useMemo(() => themeFromSourceColor(argbFromHex('#65558F')), []);

    // 사용자가 다크모드를 활성화했는지 확인
    const systemDark = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        // body에 material tokens에 관한 custom properties를 업데이트하여 테마 적용
        applyTheme(theme, {
            target: document.body,
            dark: systemDark,
        });
    }, [theme, systemDark]);

    return (
        <>
            <AppProvider>
                <AppRouter />
            </AppProvider>
        </>
    );
};
