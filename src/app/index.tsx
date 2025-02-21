import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';
import { useEffect, useMemo } from 'react';
import { AppRouter } from './router';

export const App = () => {
    // hex color로부터 테마를 가져옴
    const theme = useMemo(() => themeFromSourceColor(argbFromHex('#65558F')), []);

    // 사용자가 다크모드를 활성화했는지 확인
    // TODO: 매 렌더링마다 확인하지 말고, 실제로 값이 변경될 떄만 확인할수있나?
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        // body에 material tokens에 관한 custom properties를 업데이트하여 테마 적용
        applyTheme(theme, {
            target: document.body,
            dark: systemDark,
        });
    }, [theme, systemDark]);

    return (
        <>
            <AppRouter />
        </>
    );
};
