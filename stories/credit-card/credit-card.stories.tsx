import React from "react";
import { View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

// components
import { CreditCardWs } from "../../src/components/credit-card/credit-card";

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
  component: CreditCardWs,
  title: "CreditCardWs",
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof CreditCardWs>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof CreditCardWs>;

export const CreditCardWsVisa: Story = {
  name: "Cartão Visa",
  args: {
    back: false,
    icon: true,
    data: {
      cvv: "098",
      name: "Weverson Luan De Sousa",
      number: "4455787898754321",
      validate: "08/2029",
    },
  },
};

export const CreditCardWsVisaBack: Story = {
  name: "Cartão Visa Verso",
  args: {
    back: true,
    icon: true,
    data: {
      cvv: "567",
      name: "Weverson Luan De Sousa",
      number: "4455787898754321",
      validate: "08/2029",
    },
  },
};

export const CreditCardWsMastercard: Story = {
  name: "Cartão Mastercard",
  args: {
    back: false,
    icon: true,
    data: {
      cvv: "092",
      name: "Weverson Luan De Sousa",
      number: "5544787898754321",
      validate: "08/2026",
    },
  },
};

export const CreditCardWsMastercardBack: Story = {
  name: "Cartão Mastercard Verso",
  args: {
    back: true,
    icon: true,
    data: {
      cvv: "092",
      name: "Weverson Luan De Sousa",
      number: "5544787898754321",
      validate: "08/2026",
    },
  },
};

export const CreditCardWsAmericanExpress: Story = {
  name: "Cartão American Express",
  args: {
    back: false,
    icon: true,
    data: {
      cvv: "3760",
      name: "Weverson Luan De Sousa",
      number: "344155116631406",
      validate: "05/2024",
    },
  },
};

export const CreditCardWsAmericanExpressBack: Story = {
  name: "Cartão American Express Verso",
  args: {
    back: true,
    icon: true,
    data: {
      cvv: "3760",
      name: "Weverson Luan De Sousa",
      number: "344155116631406",
      validate: "05/2024",
    },
  },
};
