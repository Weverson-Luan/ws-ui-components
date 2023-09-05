"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
/**
 * IMPORTS
 */

// typings

const styles = props => _reactNative.StyleSheet.create({
  mainCheckbox: {
    width: props.width ? props.width : 30,
    height: props.height ? props.height : 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
/**
 * EXPORTS
 */
exports.styles = styles;