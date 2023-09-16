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
    <Path
      fill={color ? color : "#F3F3F3 "}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Zm-3.22 7.28-5.25 5.25a.747.747 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxOutline };
