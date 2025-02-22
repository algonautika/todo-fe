interface Route {
    path: string;
}

const test: Route = {
    path: '/test',
};
const signin: Route = {
    path: '/signin',
};
const main: Route = {
    path: '/main',
};

export const paths = {
    test,
    signin,
    main,
} as const;
