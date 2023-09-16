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
    <Path
      fill={color ? color : "#F3F3F3 "}
      d="M16.28 9.22a.748.748 0 0 1 0 1.06l-5.25 5.25a.747.747 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.749.749 0 0 1 1.06 0ZM21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5Zm-1.5 15v-15h-15v15h15Z"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconCheckBoxFill };
