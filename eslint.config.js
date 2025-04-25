import js from '@eslint/js';
import globals from 'globals';

export default [
    { ignores: ['dist', 'build'] },

    //Client-side config
    {
        files: ['client/**/*.js'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
            indent: ['error', 2],
        },
    },

    //Server-side config
    {
        files: ['server/**/*.js'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.node,
        },
    },
    {
        rules: {
            ...js.configs.recommended.rules,
            indent: ['error', 2],
        },
    },

]