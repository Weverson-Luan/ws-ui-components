"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconEye = void 0;
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

const SvgIconEye = ({
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
  fillRule: "evenodd",
  d: "M5.725 4.362C4.207 5.535 2.873 7.15 1.935 8.884a.246.246 0 0 0 0 .231c.938 1.736 2.272 3.35 3.79 4.523 1.523 1.177 3.18 1.873 4.775 1.873 1.595 0 3.252-.696 4.774-1.873 1.519-1.173 2.853-2.787 3.79-4.522a.247.247 0 0 0 0-.23c-.937-1.736-2.271-3.35-3.79-4.524C13.752 3.185 12.095 2.49 10.5 2.49c-1.595 0-3.252.695-4.775 1.872ZM4.77 3.126C6.47 1.81 8.455.927 10.5.927c2.045 0 4.03.884 5.73 2.199 1.705 1.317 3.176 3.105 4.21 5.016a1.81 1.81 0 0 1 0 1.717c-1.033 1.91-2.505 3.698-4.21 5.016-1.7 1.314-3.685 2.198-5.73 2.198-2.045 0-4.03-.884-5.73-2.198-1.705-1.318-3.177-3.106-4.21-5.017a1.81 1.81 0 0 1 0-1.716c1.033-1.91 2.505-3.699 4.21-5.016Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#C6C6C6",
  fillRule: "evenodd",
  d: "M12.184 7.317a2.38 2.38 0 1 0-3.368 3.367 2.38 2.38 0 0 0 3.367-3.367Zm1.052-1.053a3.87 3.87 0 1 0-5.472 5.472 3.87 3.87 0 0 0 5.472-5.472Z",
  clipRule: "evenodd"
}));

/**
 * EXPORTS
 */
exports.SvgIconEye = SvgIconEye;