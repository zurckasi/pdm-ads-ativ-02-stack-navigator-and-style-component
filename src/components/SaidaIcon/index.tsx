import React from "react";
import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
};

export const SaidaIcon = ({ height, width }: Pros) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 40 40"
                fill="none"
            >
                <Path
                    d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33335 20 3.33335C10.7953 3.33334 3.33334 10.7953 3.33334 20C3.33334 29.2048 10.7953 36.6667 20 36.6667Z"
                    stroke="#E83F5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M13.3333 20L20 26.6667L26.6667 20"
                    stroke="#E83F5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M20 13.3333L20 26.6667"
                    stroke="#E83F5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
