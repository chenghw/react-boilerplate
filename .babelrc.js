const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(
    Boolean
  ),
  presets: [
    ['@babel/preset-env', { targets: { node: '12' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
