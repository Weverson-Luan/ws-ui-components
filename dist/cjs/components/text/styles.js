"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
/**
 * IMPORTS
 */

const styles = props => _reactNative.StyleSheet.create({
  text: {
    textAlign: props === null || props === void 0 ? void 0 : props.align,
    fontSize: props === null || props === void 0 ? void 0 : props.size,
    fontWeight: props === null || props === void 0 ? void 0 : props.fontWeight,
    color: props === null || props === void 0 ? void 0 : props.color,
    lineHeight: props === null || props === void 0 ? void 0 : props.lineHeight,
    letterSpacing: 0.5,
    margin: props === null || props === void 0 ? void 0 : props.margin,
    marginLeft: (props === null || props === void 0 ? void 0 : props.marginLeft) ?? 0,
    marginRight: (props === null || props === void 0 ? void 0 : props.marginRight) ?? 0,
    marginTop: (props === null || props === void 0 ? void 0 : props.marginTop) ?? 0,
    marginBottom: (props === null || props === void 0 ? void 0 : props.marginBottom) ?? 0,
    padding: (props === null || props === void 0 ? void 0 : props.padding) ?? 0,
    paddingLeft: (props === null || props === void 0 ? void 0 : props.paddingLeft) ?? 0,
    paddingRight: (props === null || props === void 0 ? void 0 : props.paddingRight) ?? 0,
    paddingTop: (props === null || props === void 0 ? void 0 : props.paddingTop) ?? 0,
    paddingBottom: (props === null || props === void 0 ? void 0 : props.paddingBottom) ?? 0
  }
});

/**
 * EXPORTS
 */
exports.styles = styles;