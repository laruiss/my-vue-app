module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      files: [
        '**/src/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        '**/tests/e2e/*.{j,t}s?(x)',
        '**/src/**/*.e2e.{j,t}s?(x)',
      ],
      env: {
        'cypress/globals': true,
      },
    },
  ],
}
