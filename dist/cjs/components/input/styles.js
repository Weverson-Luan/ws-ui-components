"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _theme = require("../../styles/theme/theme");
/**
 * IMPORTS
 */

const styles = props => _reactNative.StyleSheet.create({
  containerInput: {
    width: '100%',
    backgroundColor: "transparent",
    position: 'relative',
    marginBottom: 16
  },
  wrapprerIcon: {
    width: 56,
    height: (props === null || props === void 0 ? void 0 : props.heightWrapperIcon) ?? 48,
    backgroundColor: "trasparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    position: "absolute",
    top: props === null || props === void 0 ? void 0 : props.topLeft,
    right: (props === null || props === void 0 ? void 0 : props.right) && props.right,
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: _theme.themeStyleNative.gray_100
  },
  wrapprerRightIcon: {
    width: 56,
    height: (props === null || props === void 0 ? void 0 : props.heightWrapperIcon) ?? 48,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: props === null || props === void 0 ? void 0 : props.top,
    right: (props === null || props === void 0 ? void 0 : props.right) && props.right,
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: _theme.themeStyleNative.gray_100
  },
  wrapprerIconExpiressAndCode: {
    width: 56,
    height: (props === null || props === void 0 ? void 0 : props.heightWrapperIcon) ?? 48,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: (props === null || props === void 0 ? void 0 : props.right) && props.right
  },
  input: {
    width: props !== null && props !== void 0 && props.width ? props === null || props === void 0 ? void 0 : props.width : '100%',
    height: (props === null || props === void 0 ? void 0 : props.height) ?? 48,
    letterSpacing: 0.5,
    margin: props === null || props === void 0 ? void 0 : props.margin,
    marginLeft: (props === null || props === void 0 ? void 0 : props.marginLeft) ?? 0,
    marginRight: (props === null || props === void 0 ? void 0 : props.marginRight) ?? 0,
    marginTop: (props === null || props === void 0 ? void 0 : props.marginTop) ?? 0,
    marginBottom: (props === null || props === void 0 ? void 0 : props.marginBottom) ?? 0,
    padding: (props === null || props === void 0 ? void 0 : props.padding) ?? 0,
    paddingLeft: (props === null || props === void 0 ? void 0 : props.paddingLeft) ?? 64,
    paddingRight: props !== null && props !== void 0 && props.icon ? 44 : props === null || props === void 0 ? void 0 : props.paddingRight,
    paddingTop: (props === null || props === void 0 ? void 0 : props.paddingTop) ?? 0,
    paddingBottom: (props === null || props === void 0 ? void 0 : props.paddingBottom) ?? 0,
    borderWidth: (props === null || props === void 0 ? void 0 : props.borderWidth) ?? 1,
    borderColor: (props === null || props === void 0 ? void 0 : props.borderColor) ?? 'black',
    borderRadius: (props === null || props === void 0 ? void 0 : props.borderRadius) ?? 4,
    color: (props === null || props === void 0 ? void 0 : props.color) ?? '#6c757d',
    fontSize: 16,
    flexWrap: 'wrap'
  },
  textLabel: {
    fontSize: props === null || props === void 0 ? void 0 : props.fontSize,
    textAlign: props === null || props === void 0 ? void 0 : props.textAlign,
    fontWeight: props === null || props === void 0 ? void 0 : props.fontWeight,
    color: props === null || props === void 0 ? void 0 : props.colorTextLabel,
    marginBottom: 8,
    lineHeight: 24,
    letterSpacing: 0.5
  }
});

/**
 * EXPORTS
 */
exports.styles = styles;