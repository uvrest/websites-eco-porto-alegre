//import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    // Configuração para arquivos do projeto (.js, .jsx)
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['dist', 'node_modules', 'vite.config.js', '*.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Regras React
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-vars': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            // Regras gerais
            'no-unused-vars': [
                'warn',
                { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    // Configuração específica para vite.config.js e outros arquivos de configuração Node.js
    {
        files: ['vite.config.js', '*.config.js'],
        ignores: ['dist', 'node_modules'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.node, // Inclui process, __dirname, etc.
            },
            parserOptions: {
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': [
                'warn',
                { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
            ],
        },
    },
];