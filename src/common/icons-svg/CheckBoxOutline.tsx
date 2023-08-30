/**
 * IMPORTS
 */
import * as React from "react";
import Svg, { Path } from "react-native-svg";
/**
 * typings
 */
import { ISvgProps } from "./interface";

const SvgIconCheckBoxOutline = ({ color, size, ...res }: ISvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : 24}
    height={size ? size : 24}
    fill="none"
    {...res}
  >
    <Path
      fill={color ? color : "#5E5E5E"}
      d="m13.984 21.016 9-9-1.406-1.454-7.594 7.594-3.562-3.562L9.016 16l4.968 5.016Zm9-14.016c.563 0 1.032.203 1.407.61.406.374.609.843.609 1.406v13.968c0 .563-.203 1.047-.61 1.453-.374.375-.843.563-1.406.563H9.016a2.069 2.069 0 0 1-1.454-.563A2.069 2.069 0 0 1 7 22.985V9.016c0-.563.188-1.032.563-1.407.406-.406.89-.609 1.453-.609h13.968Z"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxOutline };
