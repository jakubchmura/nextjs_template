module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['simple-import-sort', '@emotion'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'plugin:@next/next/recommended'
  ],
  rules: {
    '@emotion/jsx-import': 'error',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off'
  }
};
