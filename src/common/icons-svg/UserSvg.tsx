import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

/**
 * typings
 */
import { ISvgProps } from "./interface";

const SvgIconUser = ({ size, color, ...res }: ISvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : 22}
    height={size ? size : 22}
    fill="none"
    {...res}
  >
    <G clipPath="url(#a)">
      <Path
        fill={color ? color : "#C6C6C6"}
        d="M10.573 13.935a5.156 5.156 0 1 0-5.714 0A8.235 8.235 0 0 0 .8 17.175a.687.687 0 1 0 1.151.752 6.875 6.875 0 0 1 11.528 0 .687.687 0 0 0 1.152-.752 8.236 8.236 0 0 0-4.059-3.24Zm-6.638-4.29a3.781 3.781 0 1 1 7.562 0 3.781 3.781 0 0 1-7.562 0Zm18.059 8.482a.688.688 0 0 1-.952-.2A6.861 6.861 0 0 0 15.28 14.8a.688.688 0 1 1 0-1.375 3.78 3.78 0 1 0-1.405-7.294.688.688 0 1 1-.51-1.276 5.156 5.156 0 0 1 4.772 9.079 8.236 8.236 0 0 1 4.058 3.24.687.687 0 0 1-.2.952Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color ? color : "#C6C6C6"} d="M.498.363h22v22h-22z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export { SvgIconUser };
