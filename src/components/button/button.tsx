/**
 * IMPORTS
 */
import React from "react";
import { TouchableOpacity, View } from "react-native";

// components
import { TextNativeWs } from "../text/text";

// typings
import { IButtonWsProps } from "./interface";

// styles
import { styles } from "./styles";

/**
 * Componente ButtonWs para a interação da  ui.
 */
const ButtonWs = ({
  width,
  height,
  backgroundColor,
  title,
  colorTitle,
  sizeTitle,
  borderRadius,
  borderWidth,
  borderColor,
  icon,
  onPress,
  ...res
}: IButtonWsProps) => {
  const dataStylesProps = {
    width,
    height,
    backgroundColor,
    title,
    colorTitle,
    sizeTitle,
    borderRadius,
    borderWidth,
    borderColor,
    icon,
    onPress,
  } as IButtonWsProps;
  return (
    <TouchableOpacity
      {...res}
      onPress={onPress}
      style={styles(dataStylesProps).mainButton}
    >
      <View style={styles(dataStylesProps).wrapperTitleButton}>
        {icon && icon}

        {typeof title === "string" ? (
          <TextNativeWs
            text={title}
            color={colorTitle ?? "#fff"}
            size={sizeTitle ?? 16}
            fontWeight="500"
            lineHeight={24}
            letterSpacing={0.5}
          />
        ) : (
          title
        )}
      </View>
    </TouchableOpacity>
  );
};
/**
 * EXPORTS
 */
export { ButtonWs };
