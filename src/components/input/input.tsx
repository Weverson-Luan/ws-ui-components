/**
 * IMPORTS
 */
import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

// typings
import { IInputNativeWs, ITextInputProps } from "./interface";

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
  rightIconJsx,
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
  } as IInputNativeWs;


  return (
    <View 
    style={{position: 'relative'}}
    >
      {textLabel && <Text style={styles(dataPropsStyles).textLabel}>{textLabel}:</Text>}
      <TextInput
        style={styles(dataPropsStyles).inputWs}
        testID={testID}
        {...res}
      />
      
     <TouchableOpacity style={{position: 'absolute', right: 0, top: 28, backgroundColor: 'transparent', height: 49, width: 60, alignItems: 'center', justifyContent: 'center'}}>
       {rightIconJsx}
     </TouchableOpacity>
    </View>
  );
};

/**
 * EXPORTS
 */
export { InputWs };
