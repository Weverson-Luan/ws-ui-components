/**
 * IMPORTS
 */
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// typings
import { IInputNativeWs } from "./interface";

import { styles } from "./styles";

/**
 * Componente InputWs para a interação da  ui.
 */
const InputWs = ({
  name,
  width,
  height,
  textLabel,
  visiblityPassword,
  right,
  borderWidth,
  borderColor,
  borderRadius,
  textAlign,
  fontSize,
  fontWeight,
  colorTextLabel,
  lineHeight,
  letterSpacing,
  heightWrapperIcon,
  rightIconJsx,
  rightIconPasswordJsx,
  leftIconJsx,
  onPressVisiblityPassword,
  ...res
}: IInputNativeWs) => {
  const dataPropsStyles = {
    name,
    width,
    height,
    textLabel,
    visiblityPassword,
    right,
    borderWidth,
    borderColor,
    borderRadius,
    textAlign,
    fontSize,
    fontWeight,
    colorTextLabel,
    lineHeight,
    letterSpacing,
    heightWrapperIcon,
    rightIconPasswordJsx,

    onPressVisiblityPassword,
    ...res,
  } as IInputNativeWs;
  return (
    <>
      {textLabel && (
        <View
          style={{
            width: "100%",
          }}
        >
          <Text style={styles(dataPropsStyles).textLabel}>{textLabel}:</Text>
        </View>
      )}

      <View style={styles().containerInput}>
        <TextInput {...res} style={styles(dataPropsStyles).input} />

        {leftIconJsx && (
          <View
            style={
              //@ts-ignore
              styles({
                heightWrapperIcon: heightWrapperIcon,
              }).wrapprerIcon
            }
          >
            {leftIconJsx}
          </View>
        )}

        {rightIconJsx && (
          <View style={styles(dataPropsStyles).wrapprerIconExpiressAndCode}>
            {rightIconJsx}
          </View>
        )}

        {name === "password" && rightIconPasswordJsx && (
          <>
            {visiblityPassword ? (
              <View style={styles(dataPropsStyles).wrapprerIcon}>
                <TouchableOpacity onPress={onPressVisiblityPassword}>
                  {rightIconPasswordJsx}
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles(dataPropsStyles).wrapprerRightIcon}>
                <TouchableOpacity onPress={onPressVisiblityPassword}>
                  {rightIconPasswordJsx}
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </View>
    </>
  );
};

/**
 * EXPORTS
 */
export { InputWs };
