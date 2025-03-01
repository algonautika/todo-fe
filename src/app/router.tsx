import { paths } from '@/config/paths';
import { useMe } from '@/features/me/hooks';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Main } from './routes/main';
import { Today } from './routes/main/today';
import { Signin } from './routes/signin';
import { Test } from './routes/test';

export const AppRouter = () => {
    const user = useMe();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Navigate to={paths.main.path} />}
                />

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
                    element={
                        user === 'Loading'
                            ? <></>
                            : (user.isOk()
                                    ? <Main />
                                    : <Navigate to={paths.signin.path} />)
                    }
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
