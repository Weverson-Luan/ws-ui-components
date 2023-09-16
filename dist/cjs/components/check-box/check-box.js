"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxWs = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CheckBoxFill = require("../../common/icons-svg/CheckBoxFill");
var _CheckBoxOutline = require("../../common/icons-svg/CheckBoxOutline");
var _text = require("../text/text");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /**
                                                                                                                                                                                                                                                                                                                                                     * IMPORTS
                                                                                                                                                                                                                                                                                                                                                     */ // commons icons-svg
// components
// typings
// styles
/**
 * Componente CheckBoxWs para a interação da  ui.
 */
const CheckBoxWs = ({
  widthBoxCheckIcon,
  heightWrapperTextLabel,
  isChecked,
  backgroundColorCheck,
  backgroundBoxCheckIcon,
  textLabel,
  textSizeLabel,
  colorTextLabel,
  onPress,
  ...res
}) => {
  const dataStylesProps = {
    widthBoxCheckIcon,
    heightWrapperTextLabel,
    backgroundBoxCheckIcon,
    colorTextLabel
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    onPress: onPress
  }, res, {
    style: (0, _styles.styles)(dataStylesProps).mainCheckbox
  }), isChecked ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).mainCheckbox
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).wrapperBoxCheckIcon
  }, /*#__PURE__*/_react.default.createElement(_CheckBoxOutline.SvgIconCheckBoxOutline, {
    size: 24,
    color: backgroundColorCheck
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).wrapperTextLabel
  }, textLabel && /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: textLabel ? textLabel : "Label",
    color: colorTextLabel ? colorTextLabel : "white",
    size: textLabel ? textSizeLabel : 16,
    lineHeight: 24,
    letterSpacing: 0.5
  }))) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).mainCheckbox
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).wrapperBoxCheckIcon
  }, /*#__PURE__*/_react.default.createElement(_CheckBoxFill.SvgIconCheckBoxFill, {
    size: 24,
    color: backgroundColorCheck
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (0, _styles.styles)(dataStylesProps).wrapperTextLabel
  }, textLabel && /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: textLabel ? textLabel : "Label",
    color: colorTextLabel ? colorTextLabel : "white",
    size: textLabel ? textSizeLabel : 16,
    lineHeight: 24,
    letterSpacing: 0.5
  }))));
};
/**
 * EXPORTS
 */
exports.CheckBoxWs = CheckBoxWs;