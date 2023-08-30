/**
 * IMPORTS
 */
import React from "react";
import { TextInputProps } from "react-native";

interface ITextInputProps {
  textAlign: string;
  fontSize: number;
  fontWeight: string;
  color: string;
  lineHeight: number;
  letterSpacing: number;
}

interface IInputNativeWs extends TextInputProps {
  /**
   * A propriedade CSS width determina a largura da área de conteúdo de um elemento. A área de conteúdo fica dentro do preenchimento, da borda, e da margem de um elemento.
   */
  width?: number;

  /**
   * A heightpropriedade CSS especifica a altura de um elemento. Por padrão, a propriedade define a altura da área de conteúdo . Se box-sizingfor definido como border-box, entretanto, ele determinará a altura da área da borda .
   */
  height?: number;

  testID?: string;
  color?: string;

  /**
   * A propriedade ira colocar um icone no input
   */
  icon?: boolean;

  /**
   * Receber um elemento JSX para renderizar um icone
   */
  rightIconJsx?: React.ReactNode;
  leftIconJsx?: string;

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
   * A propriedade ira colocar um label em cima do input
   */
  textLabel?: string;

  /**
   * A propriedade CSS text-align descreve como conteúdo inline, como texto, é alinhado no elemento pai em bloco. text-align não controla o alinhamento de elementos em bloco, apenas o seu conteúdo inline.
   */
  textAlign?: "center" | "left" | "right";

  /**
   * A propriedade font-size no CSS estabelece o tamanho da fonte.
   */
  fontSize?: number;

  /**
   * A propriedade CSS define o peso (ou negrito) da fonte. Os pesos disponíveis dependem do que está definido atualmente.font-weight font-family
   */
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;

  /**
   * A propriedade define uma cor para o text label
   */
  colorTextLabel?: string;

  /**
   * A propriedade CSS define a altura de uma caixa de linha. É comumente usado para definir a distância entre linhas de texto. Em elementos de nível de bloco, especifica a altura mínima das caixas de linha dentro do elemento. Em elementos embutidos não substituídos , especifica a altura usada para calcular a altura da caixa de linha.line-height
   */
  lineHeight?: number;

  /**
   * A propriedade CSS define o comportamento do espaçamento horizontal entre os caracteres do texto. Este valor é adicionado ao espaçamento natural entre os caracteres durante a renderização do texto. Valores positivos de fazem com que os personagens se afastem ainda mais, enquanto valores negativos de aproximam os personagens.letter-spacing letter-spacingletter-spacing
   */
  letterSpacing?: number;

  /**
   * Metodo que ira deixar a senhas visiveis ou não
   */
  onPressVissiblePassword?: () => any;
}

/**
 * EXPORTS
 */
export { IInputNativeWs, ITextInputProps };
