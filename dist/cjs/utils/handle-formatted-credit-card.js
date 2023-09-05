"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFormattedCreditCard = handleFormattedCreditCard;
/**
 * IMPORTS
 */
function handleFormattedCreditCard(numberCard, numberCardActual) {
  numberCard = numberCard.replace(/\D/g, ""); // Permite apenas dígitos
  numberCard = numberCard.replace(/(\d{4})/g, "$1 "); // Coloca um espaço a cada 4 caracteres
  numberCard = numberCard.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
  numberCard = numberCard.substring(0, 19); // Limita o tamanho

  numberCardActual = numberCard;
  return numberCard;
}

/**
 * EXPORTS
 */