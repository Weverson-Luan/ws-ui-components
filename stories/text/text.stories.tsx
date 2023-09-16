import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { TextNativeWs } from "../../src/components/text/text";

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
  component: TextNativeWs,
  title: "TextNativeWs",
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof TextNativeWs>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof TextNativeWs>;

export const TextThin100: Story = {
  name: "Simple - 100",
  args: {
    onPress: () => {},
    text: "Simple TextWs",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "100",
    align: "center",
  },
};

export const TextLight300: Story = {
  name: "Text Light - 300",
  args: {
    onPress: () => {},
    text: "Simple TextWs",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "300",
    align: "center",
  },
};

export const TextRegular400: Story = {
  name: "Text Regular - 400",
  args: {
    onPress: () => {},
    text: "Simple Text",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "400",
    align: "center",
  },
};

export const TextMedium500: Story = {
  name: "Text Medium - 500",
  args: {
    onPress: () => {},
    text: "Simple Text",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "500",
    align: "center",
  },
};

export const TextExtraMedium600: Story = {
  name: "Text Extra Medium - 600",
  args: {
    onPress: () => {},
    text: "Simple Text",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "600",
    align: "center",
  },
};

export const TextBold700: Story = {
  name: "Text Bold - 700",
  args: {
    onPress: () => {},
    text: "Simple Text",
    size: 18,
    color: themeStyleNative.white,
    fontWeight: "700",
    align: "center",
  },
};
