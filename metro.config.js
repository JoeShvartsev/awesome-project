const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const { resolver: { sourceExts, assetExts } } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [...assetExts, 'svg'],
      sourceExts: [...sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx'], // Додайте 'svg' до sourceExts
    },
  };
})();