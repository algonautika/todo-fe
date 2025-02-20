interface Route {
    path: string;
}

const test: Route = {
    path: '/test',
};
const login: Route = {
    path: '/login',
};
const home: Route = {
    path: '/home',
};

export const paths = {
    test,
    login,
    home,
} as const;
