interface Route {
    path: string;
}

const test: Route = {
    path: '/test',
};
const signin: Route = {
    path: '/signin',
};
const home: Route = {
    path: '/home',
};

export const paths = {
    test,
    signin,
    home,
} as const;
