/**
 * IMPORTS
 */

import { ReactElement } from "react";

interface ICreditCardProps {
  /**
   * Propiedade mostrar o verso do cardão para usuário interagir com o código de segurança
   */
  back: boolean;


  /**
   * Propiedade que recebe os dados do cartão de credito
   */
  data: {
    number: string;
    name: string;
    validate: string;
    cvv: string;
  };
}
/**
 * EXPORTS
 */
export {
  ICreditCardProps
}