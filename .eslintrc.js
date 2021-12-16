module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['warn', 'always'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'no-shadow': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/prefer-default-export': 0,
    'vue/multi-word-component-names': 0,
  },
};
