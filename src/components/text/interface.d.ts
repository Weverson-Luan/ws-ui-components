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

  /**
   * A propriedade margin do CSS define a área de margem nos quatro lados do elemento. É uma abreviação que define todas as margens individuais de uma só vez: margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US).
   */
  margin?: number;

  /**
   * A propriedade CSS define a área de margem no lado esquerdo de um elemento. Um valor positivo o coloca mais distante de seus vizinhos, enquanto um valor negativo o coloca mais próximo.margin-left
   */
  marginLeft?: number;

  /**
   * A propriedade CSS define a área de margem no lado direito de um elemento. Um valor positivo o coloca mais distante de seus vizinhos, enquanto um valor negativo o coloca mais próximo.margin-right
   */
  marginRight?: number;

  /**
   * A propriedade CSS margin-top de um elemento indica o espaço acima do elemento. Valores negativos são aceitos.
   */
  marginTop?: number;

  /**
   * A propriedade CSS margin-bottom define a margin area na parte inferior de um elemento. Um valor positivo coloca o valor mais longe de outros elementos vizinhos, enquanto um valor negativo, aproxima.
   */
  marginBottom?: number;

  /**
   * A propriedade padding define uma a distância entre o conteúdo de um elemento e suas bordas. É um atalho que evita definir uma distância para cada lado separadamente (padding-top, padding-right, padding-bottom, padding-left).
   */
  padding?: number;

  /**
   * A propriedade CSS padding-left é um elemento que define o espaço de preenchimento obrigatório no lado esquerdo de um elemento. padding area é o espaço entre o conteúdo do elemento e a borda. Um valor negativo não é permitido.
   */
  paddingLeft?: number;

  /**
   * A propriedade CSS define a largura da área de preenchimento à direita de um elemento.padding-right
   */
  paddingRight?: number;

  /**
   * A propriedade CSS define a altura da área de preenchimento na parte superior de um elemento.padding-top
   */
  paddingTop?: number;

  /**
   * A propriedade CSS define a altura da área de preenchimento na parte inferior de um elemento.padding-bottom
   */
  paddingBottom?: number;

}
/**
 * EXPORTS
 */
export {ITextInterface};
