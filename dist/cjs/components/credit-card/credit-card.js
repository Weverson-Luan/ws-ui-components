"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardWs = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _text = require("../text/text");
var _IconMastercard = require("../../common/icons-svg/IconMastercard");
var _IconVisa = require("../../common/icons-svg/IconVisa");
var _IconAmericanExpress = require("../../common/icons-svg/IconAmericanExpress");
var _handleFormattedCreditCard = require("../../utils/handle-formatted-credit-card");
var _theme = require("../../styles/theme/theme");
var _styles = require("./styles");
var _IconChipCard = require("../../common/icons-svg/IconChipCard");
var _IconHipercad = require("../../common/icons-svg/IconHipercad");
var _IconMaestrocard = require("../../common/icons-svg/IconMaestrocard");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * IMPORTS
 */

var validCardType = require("card-validator");

// components

// commons

// typings

// styles

/**
 * Component de cartão de credito para a interação da ui.
 */
const CreditCardWs = ({
  data,
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
       * Bandeira Mastercard: começam com um número entre 51 e 55;
       */
      case "maestro":
        return /*#__PURE__*/_react.default.createElement(_IconMaestrocard.SvgIconMaestrocard, null);

      /**
       * Bandeira Mastercard: começam com um número entre 38 e 60;
       */
      case "hipercard":
        return /*#__PURE__*/_react.default.createElement(_IconHipercad.SvgIconHipercad, null);

      /**
       * Bandeira American Express: começam com 34 ou 37;
       */
      case "american-express":
        return /*#__PURE__*/_react.default.createElement(_IconAmericanExpress.SvgIconAmericanExpress, null);
      default:
        /*#__PURE__*/_react.default.createElement(_IconVisa.SvgIconVisa, null);
        return;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.content
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.contentHeader
  }, back ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_IconChipCard.SvgIconChipCard, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.wrapperNumber
  }, data.number.length === 0 ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, null) : handleVerificationBinCardCredit((_numberValidation = numberValidation) === null || _numberValidation === void 0 || (_numberValidation = _numberValidation.card) === null || _numberValidation === void 0 ? void 0 : _numberValidation.type))), back ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.strip
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.rowVersion
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.rowVersionChildren
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data === null || data === void 0 ? void 0 : data.cvv,
    color: _theme.themeStyleNative.text,
    size: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.datainformation
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.number ? response : "**** **** **** ****",
    color: _theme.themeStyleNative.white,
    size: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.footer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.cardHolder
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: "Card Holder",
    color: _theme.themeStyleNative.white,
    size: 14,
    fontWeight: "300",
    lineHeight: 24,
    letterSpacing: 0.5
  }), /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.name,
    color: _theme.themeStyleNative.white,
    size: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.cardHolderExpiress
  }, /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: "Validity",
    color: _theme.themeStyleNative.white,
    size: 14,
    fontWeight: "300",
    lineHeight: 24,
    letterSpacing: 0.5
  }), /*#__PURE__*/_react.default.createElement(_text.TextNativeWs, {
    text: data.validate,
    color: _theme.themeStyleNative.white,
    size: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.5
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, null))));
};

/**
 * EXPORTS
 */
exports.CreditCardWs = CreditCardWs;