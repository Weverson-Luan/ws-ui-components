"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWs = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /**
                                                                                                                                                                                                                                                                                                                                                     * IMPORTS
                                                                                                                                                                                                                                                                                                                                                     */ // typings
// styles
const InputWs = ({
  testID = "component-inputWs",
  width,
  height,
  textLabel,
  borderWidth,
  borderColor,
  borderRadius,
  textAlign,
  fontSize,
  fontWeight,
  colorTextLabel,
  lineHeight,
  letterSpacing,
  icon,
  rightIconJsx,
  onPressVissiblePassword,
  ...res
}) => {
  const dataPropsStyles = {
    width,
    height,
    textLabel,
    borderWidth,
    borderColor,
    borderRadius,
    textAlign,
    fontSize,
    fontWeight,
    colorTextLabel,
    lineHeight,
    letterSpacing,
    icon,
    ...res
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: "relative",
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: "transparent"
    }
  }, textLabel && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: (0, _styles.styles)(dataPropsStyles).textLabel
  }, textLabel, ":"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: "relative",
      flexDirection: "row",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    style: (0, _styles.styles)(dataPropsStyles).inputWs,
    testID: testID
  }, res)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressVissiblePassword,
    style: {
      width: 40,
      position: "absolute",
      right: 0,
      top: 16,
      zIndex: 9999,
      alignItems: "center",
      justifyContent: "center"
    }
  }, rightIconJsx)));
};

/**
 * EXPORTS
 */
exports.InputWs = InputWs;