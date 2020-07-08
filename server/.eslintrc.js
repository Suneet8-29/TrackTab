module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: [
    'vue'
  ],
  rules: {
    'eol-last': 0,
    indent: 'off',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 3
    }]

  }
}