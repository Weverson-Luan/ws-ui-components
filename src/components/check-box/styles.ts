/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";

// typings
import { ICheckBoxWsProps } from "./check";


const styles = (props: ICheckBoxWsProps) => StyleSheet.create({
  mainCheckbox: {
    width: props.width ? props.width : 30,
    height: props.height ? props.height : 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
})
/**
 * EXPORTS
 */
export {
  styles
}