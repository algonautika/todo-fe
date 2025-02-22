import { paths } from '@/config/paths';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Test } from './routes/test';
import { Signin } from './routes/signin';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={paths.test.path}
                    element={<Test />}
                />
                <Route
                    path={paths.signin.path}
                    element={<Signin />}
                />
            </Routes>
        </BrowserRouter>
    );
};
