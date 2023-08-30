"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBabelPlugins = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable prettier/prettier */

//@ts-ignore

const getBabelPlugins = options => {
  let reactNativeWeb = 'react-native-web';
  if (options.babelPlugins && Array.isArray(options.babelPlugins)) {
    return [reactNativeWeb, ...options.babelPlugins];
  }
  return [reactNativeWeb];
};
exports.getBabelPlugins = getBabelPlugins;
const getModule = name => _path.default.join('node_modules', name);

// copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
const DEFAULT_INCLUDES = [getModule('react-native'), getModule('react-navigation'), getModule('expo'), getModule('unimodules'), getModule('@react'), getModule('@expo'), getModule('@use-expo'), getModule('@unimodules'), getModule('native-base'), getModule('styled-components')];
const DEFAULT_EXCLUDES = ['/node_modules', '/bower_components',
// Prevent transpiling webpack generated files.
'(webpack)'];
const webpackFinal = async (config, options) => {
  var _options$modulesToTra;
  // Add __DEV__ global variable which is relied on by many libraries
  config.plugins.push(new _webpack.default.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
    //@ts-ignore
    process.env.NODE_ENV || 'development'),
    //@ts-ignore
    __DEV__: process.env.NODE_ENV !== 'production' || true
  }));

  // plugin suggested in reanimated docs https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/web-support/
  config.plugins.push(new _webpack.default.DefinePlugin({
    process: {
      env: {}
    }
  }));
  const babelPlugins = getBabelPlugins(options);
  //@ts-ignore
  const root = options.projectRoot ?? process.cwd();
  const userModules = ((_options$modulesToTra = options.modulesToTranspile) === null || _options$modulesToTra === void 0 ? void 0 : _options$modulesToTra.map(getModule)) ?? [];
  const modules = [...DEFAULT_INCLUDES, ...userModules];
  const userAliases = options.modulesToAlias ?? {};

  // fix for uncompiled react-native dependencies
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'babel-loader',
    // include logic copied from https://github.com/expo/expo-cli/blob/master/packages/webpack-config/src/loaders/createBabelLoader.ts
    include(filename) {
      if (!filename) {
        return false;
      }
      for (const possibleModule of modules) {
        if (filename.includes(_path.default.normalize(possibleModule))) {
          return true;
        }
      }
      if (filename.includes(root)) {
        for (const excluded of DEFAULT_EXCLUDES) {
          if (filename.includes(_path.default.normalize(excluded))) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    options: {
      root,
      presets: [['module:metro-react-native-babel-preset', {
        useTransformReactJSXExperimental: true
      }], ['@babel/preset-react', {
        runtime: 'automatic'
      }]],
      plugins: [...babelPlugins, '@babel/plugin-proposal-class-properties']
    }
  });
  config.resolve.extensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', ...config.resolve.extensions];
  config.resolve.alias = {
    'react-native$': 'react-native-web',
    ...config.resolve.alias,
    ...userAliases
  };
  return config;
};
//@ts-ignore
module.exports = webpackFinal;