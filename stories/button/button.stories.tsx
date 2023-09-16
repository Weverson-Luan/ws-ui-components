import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { ButtonWs } from "../../src/components/button/button";

// styles
import { themeStyleNative } from "../../src/styles/theme/theme";
import { TextNativeWs } from "../../src/components/text/text";
import { SvgIconUser } from "../../src/common/icons-svg/UserSvg";

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
  component: ButtonWs,
  title: "ButtonWS",
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof ButtonWs>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof ButtonWs>;

export const ButtonSimple: Story = {
  name: "Button - Simple",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.info,
    title: "Registre",
    colorTitle: themeStyleNative.white,
    sizeTitle: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
  },
};

export const ButtonCustom: Story = {
  name: "Button - Custom",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.info,
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};

export const ButtoRoundNoIcon: Story = {
  name: "Button - Round-No-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.info,
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
  },
};

export const ButtoRoundWithIcon: Story = {
  name: "Button - Round-With-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.info,
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};

export const ButtoRoundOutlineNoIcon: Story = {
  name: "Button - RoundOutline-No-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
  },
};

export const ButtoRoundOutlineWithIcon: Story = {
  name: "Button - RoundOutline-With-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};

export const ButtonOutlineNoIcon: Story = {
  name: "Button - Outline-No-Icon",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
  },
};

export const ButtonOutlineWithIcon: Story = {
  name: "Button - Outline-With-Icon",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.info,
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};

export const ButtonGhostNoIcon: Story = {
  name: "Button - Ghost-No-Icon",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
  },
};

export const ButtoNoGhost: Story = {
  name: "Button - Ghost-With-Icon",
  args: {
    onPress: () => {},
    width: "100%",
    height: 45,
    backgroundColor: "transparent",
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};

export const ButtoDisabledNoIcon: Story = {
  name: "Button - Disabled-No-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.gray_150,
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.gray_150,
  },
};

export const ButtoDisabled: Story = {
  name: "Button - Disabled-With-Icon",
  args: {
    onPress: () => {},
    disabled: true,
    width: "100%",
    height: 45,
    backgroundColor: themeStyleNative.gray_150,
    title: (
      <TextNativeWs
        text={"Text Native"}
        color="#fff"
        size={16}
        fontWeight="500"
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themeStyleNative.gray_150,
    icon: <SvgIconUser size={24} color="#fff" style={{ marginRight: 16 }} />,
  },
};
