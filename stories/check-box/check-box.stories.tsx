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
    onPress: () => {},
    isChecked: false,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};

export const CheckBoxAble: Story = {
  name: "Check Box - Able",
  args: {
    widthBoxCheckIcon: 40, // tamanho do box icon
    onPress: () => {},
    isChecked: true,
    backgroundColorCheck: themeStyleNative.primary,
  },
};

export const CheckBoxDisableWithLabel: Story = {
  name: "Check Box - Disable with label",
  args: {
    widthBoxCheckIcon: 30, // tamanho do box icon
    backgroundBoxCheckIcon: "transparent",
    heightWrapperTextLabel: 40, // tamanho do box text label
    textLabel:
      "Eu concordo com a Política de privacidade da WSTech e dou consentimento para a coleta, o processamento e uso dos meus dados pessoais.",
    textSizeLabel: 17,
    colorTextLabel: themeStyleNative.white,
    onPress: () => {},
    isChecked: false,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};

export const CheckBoxAbleWithLabel: Story = {
  name: "Check Box - Able with label",
  args: {
    textLabel: "Label Checked",
    textSizeLabel: 17,
    colorTextLabel: themeStyleNative.white,
    onPress: () => {},
    isChecked: true,
    backgroundColorCheck: themeStyleNative.pimary_150,
  },
};
