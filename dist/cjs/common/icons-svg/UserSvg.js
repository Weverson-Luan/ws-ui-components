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
const SvgIconUser = ({
  size,
  color,
  ...res
}) => /*#__PURE__*/React.createElement(_reactNativeSvg.default
//@ts-ignore
, _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size ? size : 24,
  height: size ? size : 24,
  fill: "none"
}, res), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: color ? color : "#F16A24",
  d: "M.767 13.625v-1.65c0-.467.12-.867.363-1.2.241-.333.562-.6.962-.8a15.91 15.91 0 0 1 2.588-.987c.858-.242 1.887-.363 3.087-.363 1.2 0 2.229.121 3.088.363.858.241 1.72.57 2.587.987.4.2.72.467.963.8.241.333.362.733.362 1.2v1.65h-14Zm16 0v-1.7c0-.583-.117-1.133-.35-1.65a3.722 3.722 0 0 0-1-1.325c.483.1.954.242 1.413.425.458.183.912.383 1.362.6.433.217.77.496 1.013.837.241.342.362.713.362 1.113v1.7h-2.8Zm-9-7.25A2.893 2.893 0 0 1 5.642 5.5a2.893 2.893 0 0 1-.875-2.125c0-.817.291-1.521.875-2.113A2.873 2.873 0 0 1 7.767.375c.816 0 1.52.296 2.113.887.591.592.887 1.296.887 2.113 0 .833-.296 1.542-.887 2.125-.592.583-1.297.875-2.113.875Zm7.275-3c0 .833-.296 1.542-.887 2.125-.592.583-1.297.875-2.113.875-.05 0-.109-.004-.175-.012a1.277 1.277 0 0 0-.15-.013c.333-.417.591-.88.775-1.388a4.64 4.64 0 0 0 .275-1.587c0-.533-.096-1.05-.288-1.55a5.997 5.997 0 0 0-.762-1.4c.05-.017.1-.03.15-.038a1.12 1.12 0 0 1 .175-.012c.816 0 1.52.296 2.113.887.591.592.887 1.296.887 2.113Z"
}));
exports.SvgIconUser = SvgIconUser;