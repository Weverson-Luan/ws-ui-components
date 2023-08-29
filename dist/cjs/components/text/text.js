"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextNative = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * IMPORTS
 */

// typings

//styles

// hello

const TextNative = ({
  text = "Hello Dev",
  color = "#1E1E1E",
  size = 23,
  lineHeight = 24,
  align = "left",
  textDecoration,
  fontWeight = "300",
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom
}) => {
  const data = {
    color,
    size,
    lineHeight,
    align,
    textDecoration,
    fontWeight,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: (0, _styles.styles)(data).text
  }, text));
};

/**
 * EXPORT
 */
exports.TextNative = TextNative;