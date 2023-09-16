/**
 * IMPORTS
 */
import React from "react";
import { TouchableOpacity, View } from "react-native";

// commons icons-svg
import { SvgIconCheckBoxFill } from "../../common/icons-svg/CheckBoxFill";
import { SvgIconCheckBoxOutline } from "../../common/icons-svg/CheckBoxOutline";

// components
import { TextNativeWs } from "../text/text";

// typings
import { ICheckBoxWsProps } from "./check";

// styles
import { styles } from "./styles";

/**
 * Componente CheckBoxWs para a interação da  ui.
 */
const CheckBoxWs = ({
  widthBoxCheckIcon,
  heightWrapperTextLabel,
  isChecked,
  backgroundColorCheck,
  backgroundBoxCheckIcon,
  textLabel,
  textSizeLabel,
  colorTextLabel,
  onPress,
  ...res
}: ICheckBoxWsProps) => {
  const dataStylesProps = {
    widthBoxCheckIcon,
    heightWrapperTextLabel,
    backgroundBoxCheckIcon,
    colorTextLabel,
  } as ICheckBoxWsProps;
  return (
    <TouchableOpacity
      onPress={onPress}
      {...res}
      style={styles(dataStylesProps).mainCheckbox}
    >
      {isChecked ? (
        <View style={styles(dataStylesProps).mainCheckbox}>
          <View style={styles(dataStylesProps).wrapperBoxCheckIcon}>
            <SvgIconCheckBoxOutline size={24} color={backgroundColorCheck} />
          </View>

          <View style={styles(dataStylesProps).wrapperTextLabel}>
            {textLabel && (
              <TextNativeWs
                text={textLabel ? textLabel : "Label"}
                color={colorTextLabel ? colorTextLabel : "white"}
                size={textLabel ? textSizeLabel : 16}
                lineHeight={24}
                letterSpacing={0.5}
              />
            )}
          </View>
        </View>
      ) : (
        <View style={styles(dataStylesProps).mainCheckbox}>
          <View style={styles(dataStylesProps).wrapperBoxCheckIcon}>
            <SvgIconCheckBoxFill size={24} color={backgroundColorCheck} />
          </View>

          <View style={styles(dataStylesProps).wrapperTextLabel}>
            {textLabel && (
              <TextNativeWs
                text={textLabel ? textLabel : "Label"}
                color={colorTextLabel ? colorTextLabel : "white"}
                size={textLabel ? textSizeLabel : 16}
                lineHeight={24}
                letterSpacing={0.5}
              />
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
/**
 * EXPORTS
 */
export { CheckBoxWs };
