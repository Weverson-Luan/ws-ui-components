/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";

// typings
import { IButtonWsProps } from "./interface";
import { themeStyleNative } from "../../styles/theme/theme";


const styles = (props: IButtonWsProps) => StyleSheet.create({
  mainButton: {
    width: props.width ?? 300,
    height: props.height ?? 45,
    paddingLeft: props.paddingLeft ?? 16,
    paddingRight: props.paddingRight ?? 16,
    flexDirection: props.flexDirection ?? "row",
    alignItems: props.alignItems ?? "center",
    justifyContent: props.justifyContent ?? "center",
    backgroundColor: props.backgroundColor ?? themeStyleNative.info,
    borderRadius: props.borderRadius ?? 0,
    borderWidth: props.borderWidth ?? 0,
    borderColor: props.borderColor ?? 'transparent',
  },
  wrapperTitleButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
})
/**
 * EXPORTS
 */
export {
  styles
}