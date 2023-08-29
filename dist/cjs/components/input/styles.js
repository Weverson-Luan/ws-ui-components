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
  textLabel: {
    fontSize: props.fontSize,
    textAlign: props.textAlign,
    fontWeight: props.fontWeight,
    color: props.colorTextLabel,
    lineHeight: 24,
    letterSpacing: 0.5
  },
  inputWs: {
    width: props.width ?? '100%',
    height: props.height ?? 45,
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
    paddingBottom: (props === null || props === void 0 ? void 0 : props.paddingBottom) ?? 0,
    borderWidth: props.borderWidth ?? 1,
    borderColor: props.borderColor ?? 'black',
    borderRadius: props.borderRadius ?? 4,
    color: '#6c757d',
    fontSize: 16
  }
});

/**
 * EXPORTS
 */
exports.styles = styles;