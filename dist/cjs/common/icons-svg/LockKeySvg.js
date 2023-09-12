"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgLockKey = void 0;
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

const SvgLockKey = ({
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
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#C6C6C6",
  d: "M11.498 9.988a2.406 2.406 0 0 0-.688 4.712v1.476a.688.688 0 0 0 1.375 0V14.7a2.406 2.406 0 0 0-.687-4.712Zm0 3.438a1.031 1.031 0 1 1 0-2.063 1.031 1.031 0 0 1 0 2.063Zm6.875-6.188h-2.75V5.176a4.125 4.125 0 1 0-8.25 0v2.062h-2.75a1.375 1.375 0 0 0-1.375 1.375v9.625a1.375 1.375 0 0 0 1.375 1.375h13.75a1.375 1.375 0 0 0 1.375-1.375V8.613a1.375 1.375 0 0 0-1.375-1.375ZM8.748 5.176a2.75 2.75 0 0 1 5.5 0v2.062h-5.5V5.176Zm9.625 13.062H4.623V8.613h13.75v9.625Z"
}));

/**
 * EXPORTS
 */
exports.SvgLockKey = SvgLockKey;