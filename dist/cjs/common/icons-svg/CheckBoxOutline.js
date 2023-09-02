"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconCheckBoxOutline = void 0;
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

const SvgIconCheckBoxOutline = ({
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
  width: 14.5,
  height: 14.5,
  x: 0.75,
  y: 1.25,
  stroke: "#F3F3F3",
  strokeWidth: 1.5,
  rx: 3.25
}));

/**
 * EXPORTS
 */
exports.SvgIconCheckBoxOutline = SvgIconCheckBoxOutline;