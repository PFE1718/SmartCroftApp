module.exports = {
  extends: 'standard',
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'space-before-function-paren': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}
