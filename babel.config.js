module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@hooks': './src/hooks',
          '@services': './src/services',
        },
      },
    ],
    'react-native-paper/babel',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
