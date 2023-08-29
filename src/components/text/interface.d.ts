/**
 * IMPORTS
 */
import {TextProps} from 'react-native';

interface ITextInterface extends TextProps {
  /**
   * Propiedade texto que serar renderizado pro usuário final
   */
  text: string;

  /**
   * A propriedade CSS color define o valor da cor de primeiro plano do texto e das decorações de texto de um elemento e define o valor currentcolor. currentcolor pode ser usado como um valor indireto em outras propriedades e é o padrão para outras propriedades de cores, como border-color.
   */
  color?: string;

  /**
   * Propiedade size define o tamanho e a orientação da caixa que é usada para representar uma página. Na maioria das vezes, esse tamanho corresponde ao tamanho alvo da página impressa, se aplicável.
   */
  size?: number;

  align?: 'center' | 'left' | 'right';
  lineHeight?: number;
  letterSpacing?: number;

  /**
   * A propriedade text-decoration do CSS é usada para definir a formatação de underline, overline, line-through ou blink. As decorações underline e overline são posicionadas abaixo e acima do texto (respectivamente), e line-through cortando-o.
   */
  textDecoration?: 'line-through' | 'underline' | 'none';

  /**
   * A propriedade CSS font-weight define o peso (ou negrito) da fonte. Os pesos disponíveis dependem da família de fontes definida atualmente.
   */
  fontWeight?: '100' | '300' | '400' | '500' | '600' | '700';

  //margin
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;

  //padding
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}
/**
 * EXPORTS
 */
export {ITextInterface};
