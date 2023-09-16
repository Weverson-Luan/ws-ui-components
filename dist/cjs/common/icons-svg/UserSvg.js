"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconUser = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * typings
 */

const SvgIconUser = ({
  size,
  color,
  ...res
}) => /*#__PURE__*/React.createElement(_reactNativeSvg.default
//@ts-ignore
, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size ? size : 22,
  height: size ? size : 22,
  fill: "none"
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.G, {
  clipPath: "url(#a)"
}, /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#C6C6C6",
  d: "M10.573 13.935a5.156 5.156 0 1 0-5.714 0A8.235 8.235 0 0 0 .8 17.175a.687.687 0 1 0 1.151.752 6.875 6.875 0 0 1 11.528 0 .687.687 0 0 0 1.152-.752 8.236 8.236 0 0 0-4.059-3.24Zm-6.638-4.29a3.781 3.781 0 1 1 7.562 0 3.781 3.781 0 0 1-7.562 0Zm18.059 8.482a.688.688 0 0 1-.952-.2A6.861 6.861 0 0 0 15.28 14.8a.688.688 0 1 1 0-1.375 3.78 3.78 0 1 0-1.405-7.294.688.688 0 1 1-.51-1.276 5.156 5.156 0 0 1 4.772 9.079 8.236 8.236 0 0 1 4.058 3.24.687.687 0 0 1-.2.952Z"
})), /*#__PURE__*/React.createElement(_reactNativeSvg.Defs, null, /*#__PURE__*/React.createElement(_reactNativeSvg.ClipPath, {
  id: "a"
}, /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#C6C6C6",
  d: "M.498.363h22v22h-22z"
}))));
exports.SvgIconUser = SvgIconUser;