"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardWs = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
var _text = require("../text/text");
var _theme = require("../../styles/theme/theme");
var _IconMastercard = require("../../common/icons-svg/IconMastercard");
var _IconVisa = require("../../common/icons-svg/IconVisa");
var _IconAmericanExpress = require("../../common/icons-svg/IconAmericanExpress");
var _handleFormattedCreditCard = require("../../utils/handle-formatted-credit-card");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * IMPORTS
 */

var validCardType = require("card-validator");

// styles

/**
 * Component de cartão de credito para a interação da ui.
 */
const CreditCardWs = ({
  data,
  icon,
  back
}) => {
  var _numberValidation;
  var numberValidation = {};
  if (data.number.length >= 4) {
    numberValidation = validCardType.number(data === null || data === void 0 ? void 0 : data.number);
  }

  /**
   * Formatação da numeração do cartão de credito
   */
  let numberCard = "";
  const response = (0, _handleFormattedCreditCard.handleFormattedCreditCard)(data.number, numberCard);

  /**
   * Recebe um numero de cartão de credito e retonar a bandeira
   */
  const handleVerificationBinCardCredit = paraString => {
    switch (paraString) {
      /**
       * Bandeira Visa: começam com o número 4;
       */
      case "visa":
        return /*#__PURE__*/_react.default.createElement(_IconVisa.SvgIconVisa, null);
      /**
       * Bandeira Mastercard: começam com um número entre 51 e 55;
       */
      case "mastercard":
        return /*#__PURE__*/_react.default.createElement(_IconMastercard.SvgIconMastercard, null);
      /**
       * Bandeira American Express: começam com 34 ou 37;
       */
      case "american-express":
        return /*#__PURE__*/_react.default.createElement(_IconAmericanExpress.SvgIconAmericanExpress, null);
      default:
        /*#__PURE__*/_react.default.createElement(_IconAmericanExpress.SvgIconAmericanExpress, null);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.content
  }, icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "100%",
      alignItems: "flex-end",
      paddingRight: 12
    }
  }, handleVerificationBinCardCredit((_numberValidation = numberValidation) === null || _numberValidation === void 0 || (_numberValidation = _numberValidation.card) === null || _numberValidation === void 0 ? void 0 : _numberValidation.type)), back ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.strip
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data === null || data === void 0 ? void 0 : data.cvv,
    color: _theme.themeStyleNative.white,
    size: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  })) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.datainformation
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      paddingLeft: 12,
      width: "100%",
      paddingRight: 16
    }
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.number ? response : "**** **** **** ****",
    color: _theme.themeStyleNative.white,
    size: 18,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 8
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.name ? data.name.toUpperCase() : "NOME COMPLETO",
    color: _theme.themeStyleNative.white,
    size: 18,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: "transparent"
    }
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.validate ? data.validate : "03/2023",
    color: _theme.themeStyleNative.white,
    size: 18,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  }))))));
};

/**
 * EXPORTS
 */
exports.CreditCardWs = CreditCardWs;