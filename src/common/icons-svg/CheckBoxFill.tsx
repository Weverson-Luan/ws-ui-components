/**
 * IMPORTS
 */
import * as React from "react";
import Svg, { Path } from "react-native-svg";
/**
 * typings
 */
import { ISvgProps } from "./interface";

const SvgIconCheckBoxFill = ({ color, size, ...res }: ISvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : 24}
    height={size ? size : 24}
    fill="none"
    {...res}
  >
    <Path
      fill={color ? color : "#1671E4"}
      d="m6.984 14.016 9-9-1.406-1.454-7.594 7.594-3.562-3.562L2.016 9l4.968 5.016Zm9-14.016c.563 0 1.032.203 1.407.61.406.374.609.843.609 1.406v13.968c0 .563-.203 1.047-.61 1.454-.374.375-.843.562-1.406.562H2.016a2.069 2.069 0 0 1-1.454-.563A2.069 2.069 0 0 1 0 15.985V2.016C0 1.453.188.984.563.609.969.203 1.453 0 2.016 0h13.968Z"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxFill };
