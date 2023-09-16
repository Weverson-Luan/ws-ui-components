/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";
import { themeStyleNative } from "../../styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    borderRadius: 8,
  },
  content: {
    width: "100%",
    height: 200,
    alignItems: "flex-start",
    backgroundColor: "#0044d0",
    borderRadius: 8,
  },
  contentHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapperNumber: {
    width: 70,
    height: 56,
    alignItems: "center",
  },
  icon: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 12,
  },
  strip: {
    width: "100%",
    height: 40,
    marginTop: 10,
    paddingRight: 16,
    backgroundColor: "#1e1e1e",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rowVersion: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    paddingRight: 16,
  },
  rowVersionChildren: {
    width: 50,
    height: 40,
    backgroundColor: themeStyleNative.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },

  datainformation: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 34,
    paddingLeft: 16,
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
    alignItems: "flex-start",

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
    backgroundColor: "transparent",
  },
});
/**
 * EXPORTS
 */
export { styles };
