module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'no-console': [0],

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js':  'never',
        'jsx': 'never',
        'ts':  'never',
        'tsx': 'never',
        'mjs': 'never',
      },
    ],
  },
};
