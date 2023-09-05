"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
/**
 * IMPORTS
 */

const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "flex-start",
    marginBottom: 30
  },
  content: {
    width: '100%',
    height: 170,
    alignItems: 'flex-start',
    backgroundColor: '#6A1B9A',
    borderRadius: 8
  },
  strip: {
    width: '100%',
    height: 30,
    marginTop: 25,
    paddingRight: 16,
    backgroundColor: "#BDBDDB",
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  datainformation: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});
/**
 * EXPORTS
 */
exports.styles = styles;