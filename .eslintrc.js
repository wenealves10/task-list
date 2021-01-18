module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/no-unused-state': 0,
    'react/state-in-constructor': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'no-console': 0,
    'react/no-array-index-key': 0,
  },
};
