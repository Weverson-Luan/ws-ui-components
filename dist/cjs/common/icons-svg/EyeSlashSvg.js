"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconEyeSlash = void 0;
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

const SvgIconEyeSlash = ({
  size,
  color,
  ...res
}) => /*#__PURE__*/React.createElement(_reactNativeSvg.default
//@ts-ignore
, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size ? size : 24,
  height: size ? size : 21,
  fill: "none"
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#C6C6C6",
  d: "M5.555 3.897a.75.75 0 1 0-1.11 1.009l1.804 1.985c-3.405 2.09-4.87 5.31-4.934 5.457a.75.75 0 0 0 0 .61c.032.073.827 1.834 2.592 3.6 2.352 2.35 5.323 3.594 8.593 3.594a11.92 11.92 0 0 0 4.882-1.016l2.062 2.27a.748.748 0 0 0 1.24-.18.75.75 0 0 0-.13-.829L5.555 3.897Zm4.437 7.11 3.907 4.299a3 3 0 0 1-3.907-4.299Zm2.508 7.645c-2.886 0-5.407-1.05-7.493-3.118a12.484 12.484 0 0 1-2.163-2.882c.44-.824 1.843-3.13 4.439-4.63L8.97 9.874a4.5 4.5 0 0 0 5.968 6.562l1.381 1.52a10.501 10.501 0 0 1-3.819.696Zm.563-8.947a.75.75 0 0 1 .28-1.474 4.515 4.515 0 0 1 3.635 3.998.75.75 0 0 1-.676.816.59.59 0 0 1-.07 0 .75.75 0 0 1-.75-.68 3.008 3.008 0 0 0-2.42-2.66Zm10.62 3.252c-.04.088-.99 2.191-3.128 4.107a.749.749 0 1 1-1-1.118 12.446 12.446 0 0 0 2.606-3.294 12.482 12.482 0 0 0-2.168-2.885c-2.086-2.066-4.607-3.115-7.493-3.115-.608-.001-1.215.048-1.815.147a.75.75 0 1 1-.248-1.48 12.563 12.563 0 0 1 2.063-.167c3.27 0 6.24 1.243 8.593 3.595 1.765 1.765 2.56 3.527 2.592 3.6a.75.75 0 0 1 0 .61h-.002Z"
}));

/**
 * EXPORTS
 */
exports.SvgIconEyeSlash = SvgIconEyeSlash;