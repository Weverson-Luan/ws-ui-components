/**
 * IMPORTS
 */
import { TouchableOpacityProps } from "react-native";

export interface ICheckBoxWsProps extends TouchableOpacityProps {
  width?: number;
  height?: number;
  isChecked: boolean;
  backgroundColorCheck?: string;
  textLabel?: string;
  textSizeLabel?: number;
  colorTextLabel?: "dark" | "light";
}
/**
 * EXPORTS
 */
export type { ICheckBoxWsProps };
