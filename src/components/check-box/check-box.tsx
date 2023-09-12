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
import { themeStyleNative } from "../../styles/theme/theme";
import { styles } from "./styles";

/**
 * Componente CheckBoxWs para a interação da  ui.
 */
const CheckBoxWs = ({
  width,
  height,
  isChecked,
  backgroundColorCheck,
  textLabel,
  textSizeLabel,
  colorTextLabel,
  onPress,
  ...res
}: ICheckBoxWsProps) => {
  const dataStylesProps = {
    width,
    height,
  } as ICheckBoxWsProps;
  return (
    <TouchableOpacity
      onPress={onPress}
      {...res}
      style={styles(dataStylesProps).mainCheckbox}
    >
      {isChecked ? (
        <View style={styles(dataStylesProps).mainCheckbox}>
          <SvgIconCheckBoxFill size={24} color={backgroundColorCheck} />
          {textLabel && (
            <TextNativeWs
              text="Label"
              color={
                colorTextLabel === "dark"
                  ? themeStyleNative.text
                  : themeStyleNative.white
              }
              size={textLabel ? textSizeLabel : 16}
              lineHeight={24}
              letterSpacing={0.5}
              marginBottom={8}
            />
          )}
        </View>
      ) : (
        <View style={styles(dataStylesProps).mainCheckbox}>
          <SvgIconCheckBoxOutline size={24} color={backgroundColorCheck} />
          {textLabel && (
            <TextNativeWs
              text="Label"
              color={
                colorTextLabel === "dark"
                  ? themeStyleNative.text
                  : themeStyleNative.white
              }
              size={textLabel ? textSizeLabel : 16}
              lineHeight={24}
              letterSpacing={0.5}
              marginBottom={8}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
/**
 * EXPORTS
 */
export { CheckBoxWs };
