/**
 * IMPORTS
 */
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
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
    <Rect
      width={14.5}
      height={14.5}
      x={0.75}
      y={1.25}
      stroke="#F3F3F3"
      strokeWidth={1.5}
      rx={3.25}
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxOutline };
