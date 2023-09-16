/**
 * IMPORTS
 */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

/**
 * typings
 */
import { ISvgProps } from "./interface";

const SvgLockKey = ({ size, color, ...res }: ISvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : 22}
    height={size ? size : 22}
    fill="none"
    {...res}
  >
    <Path
      fill={color ? color : "#C6C6C6"}
      d="M11.498 9.988a2.406 2.406 0 0 0-.688 4.712v1.476a.688.688 0 0 0 1.375 0V14.7a2.406 2.406 0 0 0-.687-4.712Zm0 3.438a1.031 1.031 0 1 1 0-2.063 1.031 1.031 0 0 1 0 2.063Zm6.875-6.188h-2.75V5.176a4.125 4.125 0 1 0-8.25 0v2.062h-2.75a1.375 1.375 0 0 0-1.375 1.375v9.625a1.375 1.375 0 0 0 1.375 1.375h13.75a1.375 1.375 0 0 0 1.375-1.375V8.613a1.375 1.375 0 0 0-1.375-1.375ZM8.748 5.176a2.75 2.75 0 0 1 5.5 0v2.062h-5.5V5.176Zm9.625 13.062H4.623V8.613h13.75v9.625Z"
    />
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgLockKey };
