/**
 * IMPORTS
 */
import { TextProps } from "react-native";

interface ITextInterface extends TextProps {
  text: string;
  color?: string;
  size?: number;
  lineHeight?: number;
  align?: "center" | "left" | "right";
  textDecoration?: "line-through" | "underline" | "none";
  fontWeight?: "300" | "400" | "500" | "600" | "700";

  //margin
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;

  //padding
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}
/**
 * EXPORTS
 */
export { ITextInterface };
