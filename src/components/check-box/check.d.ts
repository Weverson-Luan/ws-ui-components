/**
 * IMPORTS
 */
import { TouchableOpacityProps } from "react-native";

export interface ICheckBoxWsProps extends TouchableOpacityProps {
  /**
   * Proprieda do tamanho do box do icon-check-outline
   */
  widthBoxCheckIcon?: number;
  heightWrapperTextLabel?:number;
  isChecked: boolean;
  backgroundColorCheck?: string;
  backgroundBoxCheckIcon?: string
  textLabel?: string;
  textSizeLabel?: number;
  colorTextLabel?: string
}
/**
 * EXPORTS
 */
export type { ICheckBoxWsProps };
