/**
 * IMPORTS
 */
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";

// commons icons-svg
import { SvgIconCheckBoxFill } from "../../common/icons-svg/CheckBoxFill";
import { SvgIconCheckBoxOutline } from "../../common/icons-svg/CheckBoxOutline";

interface ICheckBoxWsProps extends TouchableOpacityProps {
  isChecked: boolean;
  backgroundColorCheck?: string;
}

const CheckBoxWs = ({
  isChecked,
  backgroundColorCheck,
  onPress,
  ...res
}: ICheckBoxWsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...res}
      style={{
        width: 30,
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isChecked ? (
        <SvgIconCheckBoxFill size={24} color={backgroundColorCheck} />
      ) : (
        <SvgIconCheckBoxOutline size={24} color={backgroundColorCheck} />
      )}
    </TouchableOpacity>
  );
};
/**
 * EXPORTS
 */
export { CheckBoxWs };
