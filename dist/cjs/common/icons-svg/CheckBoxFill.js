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
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#1671E4",
  d: "m6.984 14.016 9-9-1.406-1.454-7.594 7.594-3.562-3.562L2.016 9l4.968 5.016Zm9-14.016c.563 0 1.032.203 1.407.61.406.374.609.843.609 1.406v13.968c0 .563-.203 1.047-.61 1.454-.374.375-.843.562-1.406.562H2.016a2.069 2.069 0 0 1-1.454-.563A2.069 2.069 0 0 1 0 15.985V2.016C0 1.453.188.984.563.609.969.203 1.453 0 2.016 0h13.968Z"
}));

/**
 * EXPORTS
 */
exports.SvgIconCheckBoxFill = SvgIconCheckBoxFill;