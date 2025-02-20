// import React from 'react';

// type AddOptional<T> = {
//     [K in keyof T]?: T[K];
// };

// type Material3ComponentElement = {
//     // [K in keyof HTMLElementTagNameMap]: React.DetailedHTMLProps<
//     //     React.HTMLAttributes<HTMLElementTagNameMap[K]>,
//     //     HTMLElementTagNameMap[K]
//     // >;
//     [K in keyof HTMLElementTagNameMap]: AddOptional<HTMLElementTagNameMap[K]>;
// };

// declare module 'react' {
//     namespace JSX {
//         interface IntrinsicElements extends Material3ComponentElement {
//         }
//     }
// }
