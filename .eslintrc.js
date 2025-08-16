module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
            },
        ],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
};