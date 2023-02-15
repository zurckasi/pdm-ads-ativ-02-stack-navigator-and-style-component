import { Box } from "native-base";
import React, { ReactNode, useState } from "react";
import { Keyboard } from "react-native";
import { styles } from "./styles";

type Pros = {
    children: ReactNode;
};

export const Header = ({ children }: Pros) => {
    return  (
        <>
            <Box style={styles.container}>{children}</Box>
        </>
    );
};
