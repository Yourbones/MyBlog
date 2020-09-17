const OFF = 0
const ERROR = 'error'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: [ERROR, 'always', { null: 'ignore' }],
    'no-multi-spaces': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'no-use-before-define': ERROR,
    'no-var': ERROR,
    'no-else-return': ERROR,
    'dot-location': [ERROR, 'property'],
    'no-unused-vars': [ERROR, { args: 'none' }],
    'vue/return-in-computed-property': OFF,
  },
}
