/**
 * IMPORTS
 */
import {TextInputProps} from 'react-native';

interface ITextInputProps {
  textAlign: string;
  fontSize: number;
  fontWeight: string;
  color: string;
  lineHeight: number;
  letterSpacing: number;
}

interface IInputNativeWs extends TextInputProps {
  width?: number;
  height?: number;
  textLabel?: string;
  testID?: string;

  //icons
  rightIconJsx?: React.ReactNode;
  iconNameLeftPhosphor?: string;

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

  //border
  borderWidth: number;
  borderColor: string;
  borderRadius: number;

  //textLabel
  textAlign?: 'center' | 'left' | 'right';
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  colorTextLabel?: string;
  lineHeight?: number;
  letterSpacing?: number;
}

/**
 * EXPORTS
 */
export {IInputNativeWs, ITextInputProps};
