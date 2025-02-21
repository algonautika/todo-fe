import { applyTheme, argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';
import { AppRouter } from './router';
import { useEffect } from 'react';

export const App = () => {
    useEffect(() => {
        // hex color로부터 테마를 가져옴
        const theme = themeFromSourceColor(argbFromHex('#f82506'), [
            {
                name: 'custom-1',
                value: argbFromHex('#ff0000'),
                blend: true,
            },
        ]);

        // 사용자가 다크모드를 활성화했는지 확인
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // body에 material tokens에 관한 custom properties를 업데이트하여 테마 적용
        applyTheme(theme, {
            target: document.body,
            dark: systemDark,
        });
    }, []);

    return (
        <>
            <AppRouter />
        </>
    );
};
