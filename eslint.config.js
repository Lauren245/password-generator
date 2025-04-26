// import js from '@eslint/js';
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
      //Formatting & Style
      'no-multi-spaces': 'error',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-spacing': ['error', { before: true, after: true }],

      //Best Practices
      //'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'prefer-const': ['error', {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      }],
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
      //Formatting & Style
      'no-multi-spaces': 'error',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-spacing': ['error', { before: true, after: true }],

      //Best Practices
      //'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'prefer-const': ['error', {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      }],
    },
  },

];