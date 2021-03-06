module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = ['babel-plugin-styled-components'];

  return {
    presets,
    plugins,
  };
};
