import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { InputWs } from "../../src/components/input/input";
import { SvgIconUser } from "../../src/common/icons-svg/UserSvg";
import { SvgIconEye } from "../../src/common/icons-svg/EyeSvg";

// styles
import { themeStyleNative } from "../../src/styles/theme/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
});

export default {
  component: InputWs,
  title: "InputWs",
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof InputWs>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof InputWs>;

export const Input: Story = {
  name: "Input Default",
  args: {
    width: 300,
  },
};

export const InputWsCustom: Story = {
  name: "Input Custom",
  args: {
    width: 600,
    borderWidth: 1,
    borderColor: themeStyleNative.white,
    paddingLeft: 16,
    placeholder: "Informe nome de usuário",
    placeholderTextColor: themeStyleNative.secondary,
    color: themeStyleNative.white,
    icon: true,
    rightIconJsx: <SvgIconUser size={24} color={themeStyleNative.white} />,
  },
};

export const InputPasswordWsCustom: Story = {
  name: "Input Password Custom",
  args: {
    textLabel: "Informe Senha",
    colorTextLabel: themeStyleNative.white,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
    width: 600,
    borderWidth: 1,
    borderColor: themeStyleNative.white,
    paddingLeft: 16,
    placeholder: "*********",
    placeholderTextColor: themeStyleNative.secondary,
    secureTextEntry: true,
    color: themeStyleNative.white,
    icon: true,
    rightIconJsx: <SvgIconEye size={24} color={themeStyleNative.white} />,
    onPressVissiblePassword: () => alert("Show password"),
  },
};
