/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,
  plugins: [import('prettier-plugin-packagejson')],
};

module.exports = config;
