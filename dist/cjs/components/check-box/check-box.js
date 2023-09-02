"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxWs = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CheckBoxFill = require("../../common/icons-svg/CheckBoxFill");
var _CheckBoxOutline = require("../../common/icons-svg/CheckBoxOutline");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /**
                                                                                                                                                                                                                                                                                                                                                     * IMPORTS
                                                                                                                                                                                                                                                                                                                                                     */ // commons icons-svg
const CheckBoxWs = ({
  isChecked,
  backgroundColorCheck,
  onPress,
  ...res
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    onPress: onPress
  }, res, {
    style: {
      width: 30,
      height: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }), isChecked ? /*#__PURE__*/_react.default.createElement(_CheckBoxFill.SvgIconCheckBoxFill, {
    size: 24,
    color: backgroundColorCheck
  }) : /*#__PURE__*/_react.default.createElement(_CheckBoxOutline.SvgIconCheckBoxOutline, {
    size: 24,
    color: backgroundColorCheck
  }));
};
/**
 * EXPORTS
 */
exports.CheckBoxWs = CheckBoxWs;