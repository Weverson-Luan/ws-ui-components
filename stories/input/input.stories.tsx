import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { InputWs } from "../../src/components/input";
import { SvgIconUser } from "../../src/common/icons-svg/UserSvg";
import { SvgLockKey } from "../../src/common/icons-svg/LockKeySvg";
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
    height: 50,
    placeholder: "TextInput default...",
    placeholderTextColor: themeStyleNative.secondary,
    paddingLeft: 16,
    borderColor: themeStyleNative.gray_100,
  },
};

export const InputWsCustom: Story = {
  name: "Input Username Custom",
  args: {
    name: "username",
    height: 50,
    textLabel: "Nome de usuário",
    textAlign: "left",
    color: themeStyleNative.white,
    colorTextLabel: themeStyleNative.white,
    fontSize: 16,
    fontWeight: "500",
    right: 0,
    borderWidth: 1,
    borderColor: themeStyleNative.gray_100,
    borderRadius: 4,
    heightWrapperIcon: 50,
    placeholder: "Digite seu usuário",
    placeholderTextColor: themeStyleNative.secondary,
    paddingLeft: 64,
    icon: true,
    leftIconJsx: <SvgIconUser size={24} color={themeStyleNative.white} />,
  },
};

export const InputPasswordWsCustom: Story = {
  name: "Input Password Custom",
  args: {
    name: "password",
    height: 50,
    textLabel: "Informe sua senha",
    textAlign: "left",
    color: themeStyleNative.white,
    colorTextLabel: themeStyleNative.white,
    fontSize: 16,
    fontWeight: "500",
    right: 0,
    borderWidth: 1,
    borderColor: themeStyleNative.gray_100,
    borderRadius: 4,
    heightWrapperIcon: 50,
    icon: true,
    leftIconJsx: <SvgLockKey size={24} color={themeStyleNative.white} />,
    rightIconPasswordJsx: (
      <SvgIconEye size={24} color={themeStyleNative.white} />
    ),
    placeholder: "*********",
    placeholderTextColor: themeStyleNative.secondary,
    paddingLeft: 64,
    secureTextEntry: true,
    visiblityPassword: true,
  },
};
