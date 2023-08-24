/**
 * IMPORTS
 */
import React from "react";
import { Text } from "react-native";

// typings
import { ITextInterface } from "./interface";

//styles
import { styles } from "./styles";

// hello

const TextNative = ({
  text = "Hello Dev",
  color = "#1E1E1E",
  size = 23,
  lineHeight = 24,
  align = "left",
  textDecoration,
  fontWeight = "300",
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
}: ITextInterface) => {
  const data = {
    color,
    size,
    lineHeight,
    align,
    textDecoration,
    fontWeight,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  } as ITextInterface;
  return (
    <>
      <Text style={styles(data).text}>{text}</Text>
    </>
  );
};

/**
 * EXPORT
 */
export { TextNative };
