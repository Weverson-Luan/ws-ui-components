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
/**
 * Componente InputWs para a interação da  ui.
 */
const InputWs = ({
  name,
  width,
  height,
  textLabel,
  visiblityPassword,
  right,
  borderWidth,
  borderColor,
  borderRadius,
  textAlign,
  fontSize,
  fontWeight,
  colorTextLabel,
  lineHeight,
  letterSpacing,
  heightWrapperIcon,
  rightIconJsx,
  rightIconPasswordJsx,
  leftIconJsx,
  onPressVisiblityPassword,
  ...res
}) => {
  const dataPropsStyles = {
    name,
    width,
    height,
    textLabel,
    visiblityPassword,
    right,
    borderWidth,
    borderColor,
    borderRadius,
    textAlign,
    fontSize,
    fontWeight,
    colorTextLabel,
    lineHeight,
    letterSpacing,
    heightWrapperIcon,
    rightIconPasswordJsx,
    onPressVisiblityPassword,
    ...res
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, textLabel && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: (0, _styles.styles)(dataPropsStyles).textLabel
  }, textLabel, ":")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)().containerInput
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, res, {
    style: (0, _styles.styles)(dataPropsStyles).input
  })), leftIconJsx && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style:
    //@ts-ignore
    (0, _styles.styles)({
      heightWrapperIcon: heightWrapperIcon
    }).wrapprerIcon
  }, leftIconJsx), rightIconJsx && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataPropsStyles).wrapprerIconExpiressAndCode
  }, rightIconJsx), name === "password" && rightIconPasswordJsx && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, visiblityPassword ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataPropsStyles).wrapprerIcon
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressVisiblityPassword
  }, rightIconPasswordJsx)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataPropsStyles).wrapprerRightIcon
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressVisiblityPassword
  }, rightIconPasswordJsx)))));
};

/**
 * EXPORTS
 */
exports.InputWs = InputWs;