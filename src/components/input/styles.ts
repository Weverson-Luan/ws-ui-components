/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";

import { IInputNativeWs } from "./interface";
import { themeStyleNative } from "../../styles/theme/theme";


const styles = (props?: IInputNativeWs)=> StyleSheet.create({
  containerInput: {
    width: '100%',
    backgroundColor: "transparent",
    position: 'relative',
    marginBottom: 16
  },
  wrapprerIcon: {
    width: 56,
    height:props?.heightWrapperIcon ? props?.heightWrapperIcon:  50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    position: "absolute",
     right: props?.right && props.right,
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor:  themeStyleNative.gray_100,
  },
  wrapprerRightIcon: {
    width: 56,
    height: props?.heightWrapperIcon ? props?.heightWrapperIcon:  50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
     right: props?.right && props.right,
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor:  themeStyleNative.gray_100,
  },
  wrapprerIconExpiressAndCode: {
    width: 56,
    height: props?.heightWrapperIcon ?? 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
     right: props?.right && props.right,
   
  },
  input: {
    width: props?.width ? props?.width: '100%',
      height: props?.height ?? 48,
      letterSpacing: 0.5,
      margin: props?.margin,
      marginLeft: props?.marginLeft ?? 0,
      marginRight: props?.marginRight ?? 0,
      marginTop: props?.marginTop ?? 0,
      marginBottom: props?.marginBottom ?? 0,
      padding: props?.padding ?? 0,
      paddingLeft: props?.paddingLeft ?? 64,
      paddingRight: props?.icon ? 44 : props?.paddingRight,
      paddingTop: props?.paddingTop ?? 0,
      paddingBottom: props?.paddingBottom ?? 0,
      borderWidth: props?.borderWidth ?? 1,
      borderColor: props?.borderColor ?? 'black',
      borderRadius: props?.borderRadius ?? 4,
      color: props?.color ?? '#6c757d',
      fontSize: 16,
      flexWrap: 'wrap'
  },
  textLabel: {
    fontSize: props?.fontSize,
    textAlign: props?.textAlign,
    fontWeight: props?.fontWeight,
    color: props?.colorTextLabel,
    marginBottom: 8,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

/**
 * EXPORTS
 */
export {
  styles
}