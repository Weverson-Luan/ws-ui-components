import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const SvgIconChipCard = (props: SvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h36v36H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01042)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqElEQVR4nO2cy4vcRRDHBw3G4AsRo/Fxi7okZqqGIeJBXNGLRq/+Byq+c1PxMueg2a2afah4EARBVwzC7v66JxEWjCZ6il6MngTXJKeQZLO3PFZqEjEu669/4+/R8/h+oG8z1VX17a7uHqa7VgMAAAAAAAAAAAAAAAAAAAAAAAA2INFd9zml15yQc0LHnfKqV14b5uaUV7uxCiWJ8KuWg8oHR6J8pxdSp3QhdkJ8/HbJC33qJprbKkm+l/pzXuhcHwS+1ldN6FwivKfU5NuU80IXowerfdqu5OaVUpLvtfE0ks9ZhLhkVaLQ5B+catyDssOZZ4ITOrswvfvuwgTwQh9Hn946aI0+KHKrid2O9iaA5Wx+P92bWwDb5+cZCZ336jf5dnOs0+ZnvNKMF16OPzp542a+CU931zvz2XzPZzP/gmwHjjxOrLe31Brf1FF6ySud7JvRKnTCT9KL5tt6f3MKupBbAC/8W5EC/E2ij9zqlRajJ1953nz5z/jzCXs8vwDKK2UIYMzNPX+9E5qNJwDNmA+B+PP0sVKEALmCDNlvtWrX2SisfOQLuVDyq4g/ugDGoY+at3mhUxUm/0Ra2Rk5AQwnjZcrE0D5hVpGRkaApdb4Jq/8Z+kCCC9vtNuJHX9pDnQXceGvDgo/EOrLVbEgC09nOnwKfZl3A9IvAnSbUz4dOhm6Nj1btgB2IAwmX/l0Uf31jQBXR98XqX21m2NlC7A4VX8wzYerI39tKAWwXwnT+vp630O3lC2A9RGId2VoBcjikC9ZgH6LFwKsAwIoZkDUEeEhQFx8ZAFGHg8B4uIhAAQYaTxmAAQYaTxmAAToK3AQY/wW5Af4JI4ZoBAAvwXlAWsAowR5rAGDuwh6rAEQYKDwOAlHF+BAiSIciBzeYJBI46lC/6YovNxp15+MHddA0Zmtb/XKhwsQ4LDd7I8dz0CyNL3j5lwiCH9rNmLHMdAszO663Sv/3mvynfIfh6Z23xHb/6EgkfpjTvhy5uQLX7bvxPZ7qHDKn2cf/fRZbVgo+s+q15SIVaf8g2vzm4lu3xzyw03Qzsz2282xkL2lT8ZvdMJ7nfCPJb5zVMglvV9Lcm7tn5JBP2V5+MgLHc1g6/uQHevLK/1cQVxFXFOt5i6v64qQPhOc8LtBW8LvhEZ+FcnvxqQ8H/2pgt5a4400X+wwFQx6kp5IjUd4b3XxFPBUQaWPdQgdTfPFv7/z/pCNUCmzml/N6KcL9sxPbgG6gQt/WInTwufT/Jjb/+iWkA37TECA89WMfpopJPldpyea2+x6UQWOr4Trd2gGBNeR0gVwyme+kYfvqhWJPUhX+pNlkl6CbCCEbIQCL70ECV0M3cT839iiUqoIQq+n9Z8oj4dsdCYbj6fZsHNHmcm3G/+FJ/5fSRDeU0Y5csrH5lo7bkjr2yu9HbQj9Faq/7p9s215S/D/jD30VKsCe5DOFuaidkdO+ViW57280pGwAPxdxpvwhYhgObAb/oXX/CxY0rplSWnRKf3SywJ35bN0xMpOaOQbvs2U1XYijXrIns0EO3fYutOr3xarvYZl5aawrSYAAAAAAAAAAAAAAAAAAGrDyl+zpME7uz1bPgAAAABJRU5ErkJggg=="
        id="b"
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export { SvgIconChipCard };
