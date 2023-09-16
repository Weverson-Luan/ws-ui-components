"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
/**
 * IMPORTS
 */

// typings

const styles = props => _reactNative.StyleSheet.create({
  mainCheckbox: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent",'
  },
  wrapperBoxCheckIcon: {
    width: props.widthBoxCheckIcon ? props.widthBoxCheckIcon : 30,
    height: 40,
    flexDirection: "column",
    backgroundColor: props.backgroundBoxCheckIcon ? props.backgroundBoxCheckIcon : 'transparent',
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  wrapperTextLabel: {
    width: "100%",
    height: props.heightWrapperTextLabel ? props.heightWrapperTextLabel : 40,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});
/**
 * EXPORTS
 */
exports.styles = styles;