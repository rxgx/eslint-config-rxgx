module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/prop-types': ['warn'],
    'react/jsx-no-comment-textnodes': ['warn']
  }
};
