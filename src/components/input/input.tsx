/**
 * IMPORTS
 */
import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

// typings
import { IInputNativeWs } from "./interface";

// styles
import { styles } from "./styles";

const InputWs = ({
  testID = "component-inputWs",
  width,
  height,
  textLabel,
  borderWidth,
  borderColor,
  borderRadius,
  textAlign,
  fontSize,
  fontWeight,
  colorTextLabel,
  lineHeight,
  letterSpacing,
  icon,
  rightIconJsx,
  onPressVissiblePassword,
  ...res
}: IInputNativeWs) => {
  const dataPropsStyles = {
    width,
    height,
    textLabel,
    borderWidth,
    borderColor,
    borderRadius,
    textAlign,
    fontSize,
    fontWeight,
    colorTextLabel,
    lineHeight,
    letterSpacing,
    icon,
    ...res,
  } as IInputNativeWs;

  return (
    <View
      style={{
        position: "relative",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "transparent",
      }}
    >
      {textLabel && (
        <Text style={styles(dataPropsStyles).textLabel}>{textLabel}:</Text>
      )}
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <TextInput
          style={styles(dataPropsStyles).inputWs}
          testID={testID}
          {...res}
        />

        <TouchableOpacity
          onPress={onPressVissiblePassword}
          style={{
            width: 40,
            position: "absolute",
            right: 0,
            top: 16,
            zIndex: 9999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rightIconJsx}
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { InputWs };
