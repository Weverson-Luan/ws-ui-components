/**
 * IMPORTS
 */
import React from "react";
import { TouchableOpacityProps } from "react-native";

interface IButtonWsProps extends TouchableOpacityProps {
  /**
   * A propriedade CSS width determina a largura da área de conteúdo de um elemento. A área de conteúdo fica dentro do preenchimento, da borda, e da margem de um elemento.
   */
  width?: number | string;

  /**
   * A propriedade height propriedade CSS especifica a altura de um elemento. Por padrão, a propriedade define a altura da área de conteúdo . Se box-sizingfor definido como border-box, entretanto, ele determinará a altura da área da borda .
   */
  height?: number | string;

  /**
   * A propriedade CSS define a cor de fundo de um elemento.background-color.
   */
  backgroundColor?: string;

  /**
   * A propriedade Title define um titulo para o butão.
   */
  title?: string | React.ReactNode;

  /**
   * A propriedade colorTitle define uma cor pra o titulo do butão.
   */
  colorTitle?: string;

  sizeTitle?: number;

  /**
   * A propriedade CSS define como os flex items são colocados no flex container definindo o eixo principal e a direção (normal ou invertida).flex-direction.
   */
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";

  /**
   * A propriedade CSS align-items define o align-selfvalor de todos os filhos diretos como um grupo. No Flexbox, ele controla o alinhamento dos itens no eixo cruzado . No Layout de Grade, ele controla o alinhamento dos itens no Eixo do Bloco dentro de sua área de grade.
   */
  alignItems?: "baseline" | "flex-start" | "flex-end" | "stretch";

  /**
   * A propriedade CSS justify-content define como o navegador distribui o espaço entre e ao redor dos itens de conteúdo ao longo do eixo principal de um contêiner flexível e do eixo embutido de um contêiner de grade.
   */
  justifyContent?: "flex-start" | "center" | "space-between" | "space-around" | "space-evenly";

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

  /**
   * A propriedade CSS abreviada define a largura da borda de um elemento.border-width
   */
  borderWidth: number;

  /**
   * A propriedade CSS abreviada define a cor da borda de um elemento.border-color
   */
  borderColor: string;

  /**
   * A propriedade CSS arredonda os cantos da borda externa de um elemento. Você pode definir um único raio para criar cantos circulares ou dois raios para criar cantos elípticos.border-radius
   */
  borderRadius: number;

  /**
   * Propriedade que motra o icone dentro do butão ao lado do titulo.
   */
  icon?: React.ReactNode ;
}
/**
 * EXPORTS
 */
export type { IButtonWsProps };
