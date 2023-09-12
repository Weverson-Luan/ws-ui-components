/**
 * IMPORTS
 */

import React from "react";
import { View, Text } from "react-native";
var validCardType = require("card-validator");

// components
import { TextNativeWs } from "../text/text";

// commons
import { SvgIconMastercard } from "../../common/icons-svg/IconMastercard";
import { SvgIconVisa } from "../../common/icons-svg/IconVisa";
import { SvgIconAmericanExpress } from "../../common/icons-svg/IconAmericanExpress";
import { handleFormattedCreditCard } from "../../utils/handle-formatted-credit-card";

// typings
import { ICreditCardProps } from "./interface";

// styles
import { themeStyleNative } from "../../styles/theme/theme";
import { styles } from "./styles";
import { SvgIconChipCard } from "../../common/icons-svg/IconChipCard";
import { SvgIconHipercad } from "../../common/icons-svg/IconHipercad";
import { SvgIconMaestrocard } from "../../common/icons-svg/IconMaestrocard";

/**
 * Component de cartão de credito para a interação da ui.
 */
const CreditCardWs = ({ data, back }: ICreditCardProps) => {
  var numberValidation = {} as any;

  if (data.number.length >= 4) {
    numberValidation = validCardType.number(data?.number);
  }

  /**
   * Formatação da numeração do cartão de credito
   */
  let numberCard = "";
  const response = handleFormattedCreditCard(data.number, numberCard);

  /**
   * Recebe um numero de cartão de credito e retonar a bandeira
   */
  const handleVerificationBinCardCredit = (paraString?: string) => {
    switch (paraString) {
      /**
       * Bandeira Visa: começam com o número 4;
       */
      case "visa":
        return <SvgIconVisa />;

      /**
       * Bandeira Mastercard: começam com um número entre 51 e 55;
       */
      case "mastercard":
        return <SvgIconMastercard />;

      /**
       * Bandeira Mastercard: começam com um número entre 51 e 55;
       */
      case "maestro":
        return <SvgIconMaestrocard />;

      /**
       * Bandeira Mastercard: começam com um número entre 38 e 60;
       */
      case "hipercard":
        return <SvgIconHipercad />;

      /**
       * Bandeira American Express: começam com 34 ou 37;
       */
      case "american-express":
        return <SvgIconAmericanExpress />;

      default:
        <SvgIconVisa />;
        return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          {back ? <></> : <SvgIconChipCard />}

          <View
            style={{
              width: 70,
              height: 56,
              alignItems: "center",
            }}
          >
            {data.number.length === 0 ? (
              <Text />
            ) : (
              handleVerificationBinCardCredit(numberValidation?.card?.type)
            )}
          </View>
        </View>

        {back ? (
          <>
            <View style={styles.strip} />

            <View style={styles.rowVersion}>
              <View style={styles.rowVersionChildren}>
                <TextNativeWs
                  text={data?.cvv}
                  color={themeStyleNative.text}
                  size={16}
                  fontWeight="500"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.datainformation}>
              <TextNativeWs
                text={data.number ? response : "**** **** **** ****"}
                color={themeStyleNative.white}
                size={16}
                fontWeight="500"
                lineHeight={24}
                letterSpacing={0.5}
              />
            </View>

            <View style={styles.footer}>
              <View style={styles.cardHolder}>
                <TextNativeWs
                  text={"Card Holder"}
                  color={themeStyleNative.white}
                  size={14}
                  fontWeight="300"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
                <TextNativeWs
                  text={data.name}
                  color={themeStyleNative.white}
                  size={16}
                  fontWeight="500"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </View>

              <View style={styles.cardHolderExpiress}>
                <TextNativeWs
                  text={"Validity"}
                  color={themeStyleNative.white}
                  size={14}
                  fontWeight="300"
                  lineHeight={24}
                  letterSpacing={0.5}
                />

                <TextNativeWs
                  text={data.validate}
                  color={themeStyleNative.white}
                  size={16}
                  fontWeight="500"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </View>
            </View>

            <View></View>
          </>
        )}
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { CreditCardWs };
