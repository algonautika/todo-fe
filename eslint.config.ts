import stylistic from '@stylistic/eslint-plugin';
import pluginQuery from '@tanstack/eslint-plugin-query';
import parserTs from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import neverthrow from 'eslint-plugin-neverthrow';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

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

export default tseslint.config(
    ...pluginQuery.configs['flat/recommended'],
    {
        files: ['**/*.{ts,tsx}'],
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
        settings: {
            'import/resolver': {
                typescript: true,
            },
            'import/external-module-folders': ['node_modules'],
            'import/internal-regex': '^@/',
        },
        rules: {
            'import/no-default-export': 'off',
            'import/no-unresolved': 'off',
            'import/no-named-as-default-member': 'off',
            'import/default': 'off',
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    'newlines-between': 'always',
                    named: true,
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    warnOnUnassignedImports: true,
                },
            ],
        },
    },
    {
        ...customized,
        files: ['eslint.config.ts'],
    },
    tseslint.configs.strictTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
        ignores: ['node_modules', 'eslint.config.ts'],
        languageOptions: {
            parser: parserTs,
            ecmaVersion: 2025,
            sourceType: 'module',
            parserOptions: {
                projectService: true,
            },
        },
        plugins: {
            ...config.plugins,
            ...customized.plugins,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            neverthrow,
        },
        rules: {
            ...config.rules,
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
                    ObjectPattern: {
                        consistent: true,
                    },
                    ImportDeclaration: {
                        consistent: true,
                    },
                    ExportDeclaration: {
                        consistent: true,
                    },
                },
            ],
            '@stylistic/object-property-newline': ['warn'],
            '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],
            '@stylistic/jsx-max-props-per-line': [
                'warn', {
                    maximum: 1,
                    when: 'always',
                },
            ],
            '@stylistic/jsx-curly-spacing': [
                'warn', {
                    when: 'never',
                    children: {
                        when: 'always',
                    },
                },
            ],
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
            '@stylistic/indent-binary-ops': ['error', 4],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/consistent-type-assertions': ['warn', {
                assertionStyle: 'never',
            }],
        },
    })),
);
