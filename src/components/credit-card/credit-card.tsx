/**
 * IMPORTS
 */

import React from "react";
import { View } from "react-native";
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

/**
 * Component de cartão de credito para a interação da ui.
 */
const CreditCardWs = ({ data, icon, back }: ICreditCardProps) => {
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
  const handleVerificationBinCardCredit = (paraString: string) => {
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
       * Bandeira American Express: começam com 34 ou 37;
       */
      case "american-express":
        return <SvgIconAmericanExpress />;
      default:
        <SvgIconAmericanExpress />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {icon && (
          <View style={styles.icon}>
            {handleVerificationBinCardCredit(numberValidation?.card?.type)}
          </View>
        )}

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
          <View style={styles.datainformation}>
            <View style={{ paddingLeft: 12, width: "100%", paddingRight: 16 }}>
              <TextNativeWs
                text={data.number ? response : "**** **** **** ****"}
                color={themeStyleNative.white}
                size={18}
                fontWeight="500"
                lineHeight={24}
                letterSpacing={0.5}
                marginBottom={8}
              />
              <View>
                <TextNativeWs
                  text={data.name ? data.name.toUpperCase() : "NOME COMPLETO"}
                  color={themeStyleNative.white}
                  size={18}
                  fontWeight="500"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </View>

              <View style={styles.validate}>
                <TextNativeWs
                  text={data.validate ? data.validate : "03/2023"}
                  color={themeStyleNative.white}
                  size={18}
                  fontWeight="500"
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { CreditCardWs };
