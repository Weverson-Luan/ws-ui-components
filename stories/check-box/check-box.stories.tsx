import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { CheckBoxWs } from "../../src/components/check-box/check-box";

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
  component: CheckBoxWs,
  title: "CheckBoxWs",
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof CheckBoxWs>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof CheckBoxWs>;

export const CheckBoxDisable: Story = {
  name: "Check Box - Disable",
  args: {
    width: 30,
    height: 30,
    onPress: () => {},
    isChecked: false,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};

export const CheckBoxAble: Story = {
  name: "Check Box - Able",
  args: {
    width: 30,
    height: 30,
    onPress: () => {},
    isChecked: true,
    backgroundColorCheck: themeStyleNative.primary,
  },
};

export const CheckBoxDisableWithLabel: Story = {
  name: "Check Box - Disable with label",
  args: {
    width: 80,
    height: 40,
    textLabel: "Label",
    textSizeLabel: 17,
    colorTextLabel: "light",
    onPress: () => {},
    isChecked: false,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};

export const CheckBoxAbleWithLabel: Story = {
  name: "Check Box - Able with label",
  args: {
    width: 80,
    height: 40,
    textLabel: "Label Checked",
    textSizeLabel: 17,
    colorTextLabel: "light",
    onPress: () => {},
    isChecked: true,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};
