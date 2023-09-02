/**
 * IMPORTS
 */
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
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
    <Rect
      width={16}
      height={16}
      y={0.5}
      fill={color ? color : "#056CF2"}
      rx={4}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.002 6.7-3.6 3.6-1.8-1.8"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxFill };
