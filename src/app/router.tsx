import { paths } from '@/config/paths';
import { BrowserRouter, Navigate, redirect, Route, Routes } from 'react-router';
import { Test } from './routes/test';
import { Signin } from './routes/signin';
import { Main } from './routes/main';
import { Today } from './routes/main/today';

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
