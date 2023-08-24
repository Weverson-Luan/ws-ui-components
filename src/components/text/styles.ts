/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";
import { ITextInterface } from "./interface";

const styles = (props: ITextInterface) =>
  StyleSheet.create({
    text: {
      textAlign: props?.align,
      fontSize: props?.size,
      fontWeight: props?.fontWeight,
      color: props?.color,
      lineHeight: props?.lineHeight,
      letterSpacing: 0.5,
      margin: props?.margin,
      marginLeft: props?.marginLeft ?? 0,
      marginRight: props?.marginRight ?? 0,
      marginTop: props?.marginTop ?? 0,
      marginBottom: props?.marginBottom ?? 0,
      padding: props?.padding ?? 0,
      paddingLeft: props?.paddingLeft ?? 0,
      paddingRight: props?.paddingRight ?? 0,
      paddingTop: props?.paddingTop ?? 0,
      paddingBottom: props?.paddingBottom ?? 0,
    },
  });

/**
 * EXPORTS
 */
export { styles };
