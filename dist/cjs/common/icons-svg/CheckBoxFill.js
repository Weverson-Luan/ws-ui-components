"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconCheckBoxFill = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /**
                                                                                                                                                                                                                                                                                                                                                     * IMPORTS
                                                                                                                                                                                                                                                                                                                                                     */
/**
 * typings
 */

const SvgIconCheckBoxFill = ({
  color,
  size,
  ...res
}) => /*#__PURE__*/React.createElement(_reactNativeSvg.default
//@ts-ignore
, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size ? size : 24,
  height: size ? size : 24,
  fill: "none"
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.Rect, {
  width: 16,
  height: 16,
  y: 0.5,
  fill: color ? color : "#056CF2",
  rx: 4
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  stroke: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m11.002 6.7-3.6 3.6-1.8-1.8"
}));

/**
 * EXPORTS
 */
exports.SvgIconCheckBoxFill = SvgIconCheckBoxFill;