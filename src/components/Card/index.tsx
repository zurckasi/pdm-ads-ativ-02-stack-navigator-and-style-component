import currencyFormatter from "currency-formatter";
import { Box, HStack, Text } from "native-base";
import React from "react";
import { EntradaIcon } from "../EntradaIcon";
import { SaidaIcon } from "../SaidaIcon";
import { TotalIcon } from "../TotalIcon";
import { styles } from "./styled";

type Props = {
    typing: string;
    valor:number
};

export const Card = ({ typing,valor }: Props) => {
    return (
        <>
            <Box
                bg={typing === "total" ? "#FF872C" : "#FFFFFF"}
                style={styles.container}
            >
                <HStack space={3} style={styles.cont}>
                    <Text
                        color={typing === "total" ? "#FFFFFF" : "#363F5F"}
                        fontSize="md"
                    >
                        {typing === "appetizer"
                            ? "Entradas"
                            : typing === "departures"
                            ? "Saídas"
                            : "Total"}
                    </Text>
                    {typing === "appetizer" ? (
                        <EntradaIcon width="40" height="40" />
                    ) : typing === "departures" ? (
                        <SaidaIcon width="40" height="40" />
                    ) : (
                        <TotalIcon width="40" height="40" />
                    )}
                </HStack>
                <Box style={styles.value}>
                    <Text
                        color={typing === "total" ? "#FFFFFF" : "#363F5F"}
                        fontSize="3xl"
                    >
                        {currencyFormatter.format(valor / 10000, {
                            code: "BRL",
                            locale: "pt-BR",
                        })}
                    </Text>
                    {typing === "total" ? null : (
                        <Text color={"#969CB3"} fontSize="sm">
                            Última entrada dia 13 de abril
                        </Text>
                    )}
                </Box>
            </Box>
        </>
    );
};
