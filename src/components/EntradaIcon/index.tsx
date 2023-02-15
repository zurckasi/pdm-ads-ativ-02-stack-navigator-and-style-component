import React from "react";
import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
};

export const EntradaIcon = ({ height, width }: Pros) => {
    return (
        <>
            <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
                <Path
                    d="M20 3.33332C10.7952 3.33332 3.33331 10.7952 3.33331 20C3.33331 29.2047 10.7952 36.6667 20 36.6667C29.2047 36.6667 36.6666 29.2047 36.6666 20C36.6666 10.7952 29.2047 3.33332 20 3.33332Z"
                    stroke="#12A454"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M26.6666 20L20 13.3333L13.3333 20"
                    stroke="#12A454"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M20 26.6667L20 13.3333"
                    stroke="#12A454"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
