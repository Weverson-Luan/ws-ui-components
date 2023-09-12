"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _theme = require("../../styles/theme/theme");
/**
 * IMPORTS
 */

const styles = _reactNative.StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    borderRadius: 8
  },
  content: {
    width: "100%",
    height: 200,
    alignItems: "flex-start",
    backgroundColor: "#0044d0",
    borderRadius: 8
  },
  icon: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 12
  },
  strip: {
    width: "100%",
    height: 40,
    marginTop: 10,
    paddingRight: 16,
    backgroundColor: "#1e1e1e",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rowVersion: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    paddingRight: 16
  },
  rowVersionChildren: {
    width: 50,
    height: 40,
    backgroundColor: _theme.themeStyleNative.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1
  },
  datainformation: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 34,
    paddingLeft: 16
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignitems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 16,
    backgroundColor: 'transparent'
  },
  cardHolder: {
    width: "50%",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  cardHolderExpiress: {
    width: "50%",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 16
  },
  validate: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  }
});
/**
 * EXPORTS
 */
exports.styles = styles;