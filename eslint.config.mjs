import globals from 'globals';
import * as pluginJs from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js', '**/*.ts'],
    plugins: {
      jsdoc,
      '@typescript-eslint': tsEslintPlugin,
      prettier,
    },
    languageOptions: {
      parser: tsEslintParser,
      globals: globals.browser,
    },
    rules: {
      'eqeqeq': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'prettier/prettier': 'error',
      'jsdoc/require-description': 'error',
      'jsdoc/check-values': 'error',
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    ignores: ['node_modules/*'],
  },
];
