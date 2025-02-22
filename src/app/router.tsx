import { paths } from '@/config/paths';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Test } from './routes/test';
import { Signin } from './routes/signin';
import { Main } from './routes/main';

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
                        path={paths.main.today.path}
                        element={<div>Today</div>}
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};
