/**
 * IMPORTS
 */

import {StyleSheet} from 'react-native';
import {IInputNativeWs} from './interface';

const styles = (props: IInputNativeWs) =>
  StyleSheet.create({
    textLabel: {
      fontSize: props.fontSize,
      textAlign: props.textAlign,
      fontWeight: props.fontWeight,
      color: props.colorTextLabel,
      marginBottom: 8,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    inputWs: {
      width: props.width ?? '100%',
      height: props.height ?? 45,
      letterSpacing: 0.5,
      margin: props?.margin,
      marginLeft: props?.marginLeft ?? 0,
      marginRight: props?.marginRight ?? 0,
      marginTop: props?.marginTop ?? 0,
      marginBottom: props?.marginBottom ?? 0,
      padding: props?.padding ?? 0,
      paddingLeft: props?.paddingLeft ?? 0,
      paddingRight: props?.icon ? 44 : props.paddingRight,
      paddingTop: props?.paddingTop ?? 0,
      paddingBottom: props?.paddingBottom ?? 0,
      borderWidth: props.borderWidth ?? 1,
      borderColor: props.borderColor ?? 'black',
      borderRadius: props.borderRadius ?? 4,
      color: props.color ?? '#6c757d',
      fontSize: 16,
      flexWrap: 'wrap'
    },
  });

/**
 * EXPORTS
 */
export {styles};
