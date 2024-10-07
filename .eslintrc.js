module.exports = {
    env: {
      node: true, // Thêm dòng này
      browser: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['import'],
    rules: {
      'no-unused-vars': 'warn',
      'import/named': 'error',
    },
  };
  