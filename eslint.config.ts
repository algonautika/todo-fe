import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const a = 1;

const customized = stylistic.configs.customize({
    arrowParens: true,
    blockSpacing: true,
    braceStyle: '1tbs',
    commaDangle: 'always-multiline',
    indent: 4,
    jsx: true,
    pluginName: '@stylistic',
    quoteProps: 'as-needed',
    quotes: 'single',
    semi: true,
});

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parserTs,
            globals: globals.browser,
        },
        plugins: {
            ...customized.plugins,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...customized.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],
            '@stylistic/array-bracket-newline': [
                'warn', {
                    multiline: true,
                },
            ],
            '@stylistic/array-element-newline': ['warn', 'consistent'],
            '@stylistic/curly-newline': ['warn', 'always'],
            '@stylistic/newline-per-chained-call': [
                'warn', {
                    ignoreChainWithDepth: 2,
                },
            ],
            '@stylistic/eol-last': ['warn', 'always'],
            '@stylistic/object-curly-newline': [
                'warn',
                {
                    ObjectExpression: 'always',
                    ObjectPattern: 'always',
                    ImportDeclaration: {
                        consistent: true,
                    },
                    ExportDeclaration: {
                        consistent: true,
                    },
                },
            ],
            '@stylistic/object-property-newline': ['warn'],
            '@stylistic/jsx-first-prop-new-line': ['warn', 'always'],
            '@stylistic/padding-line-between-statements': [
                'warn',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'function',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'class',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'break',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'continue',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'export',
                },
            ],
            '@stylistic/max-len': [
                'warn', {
                    code: 80,
                    ignoreComments: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                },
            ],
        },
    },
] satisfies Linter.Config[];
