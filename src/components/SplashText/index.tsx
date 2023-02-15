import { Text } from "native-base";
import React from "react";
import { FinanceIcon } from "../FinanceIcon";
import { styles } from "./styled";

export const SplashText = () => {
    return (
        <>
            <FinanceIcon height="80" width="80" />
            <Text style={styles.text} fontSize="3xl">
                {"Controle suas\n finanças de forma\n muito simples"}
            </Text>
        </>
    );
};
