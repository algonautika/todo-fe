import { BrowserRouter, Route, Routes } from 'react-router';
import { paths } from '@/config/paths';
import { Test } from './routes/test';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={paths.test.path}
                    element={<Test />}
                />
            </Routes>
        </BrowserRouter>
    );
};
