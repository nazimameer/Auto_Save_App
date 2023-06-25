module.exports = {
  env: { browser: true, es2020: true },
  "globals": {
    "process": true
  },"rules": {
    "no-undef": "off",
    "no-restricted-globals": [
      "error",
      {
        "name": "process",
        "message": "Please use process.env."
      }
    ]
  },"plugins": ["import"],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
