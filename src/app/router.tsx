import { paths } from '@/config/paths';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Main } from './routes/main';
import { Today } from './routes/main/today';
import { Signin } from './routes/signin';
import { Test } from './routes/test';

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
                <Route
                    path={paths.main.path}
                    element={<Main />}
                >
                    <Route
                        index
                        element={<Navigate to={paths.main.today.path} />}
                    />
                    <Route
                        path={paths.main.today.path}
                        element={<Today />}
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};
