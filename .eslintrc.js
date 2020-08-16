module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  ignorePatterns: ['node_modules', 'dist', 'public', '*.spec.js', 'bundle.js'],
  plugins: ['prettier', 'svelte3'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-self-assign': 'off'
  }
};
