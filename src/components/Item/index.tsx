import currencyFormatter from "currency-formatter";
import { Box, HStack, Text } from "native-base";
import React from "react";
import { ListRenderItemInfo } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { Records } from "../../types/records";
import moment from "moment";
import { styles } from "./styles";

type Props = {
    item: ListRenderItemInfo<Records>;
};

export const Item = ({ item }: Props) => {
    return (
        <>
            <Box key={item.index} style={styles.container}>
                <Text color={"#363F5F"} fontSize="md">
                    {item.item.name}
                </Text>
                <Text
                    bold
                    color={item.item.type === "outcome" ? "#E83F5B" : "#12A454"}
                    fontSize="2xl"
                >
                    {item.item.type === "outcome" ? "- " : null}
                    {currencyFormatter.format(item.item.price / 10000, {
                        code: "BRL",
                        locale: "pt-BR",
                    })}
                </Text>
                <HStack style={styles.cont}>
                    <HStack space={3}>
                        <Icon name="dollar" size={30} color="#d5d7e0" />
                        <Text color={"#969CB3"} fontSize="lg">
                            {item.item.category}
                        </Text>
                    </HStack>
                    <Box>
                        <Text color={"#969CB3"} fontSize="lg">
                            {moment(item.item.data).format("DD/MM/YYYY")}
                        </Text>
                    </Box>
                </HStack>
            </Box>
        </>
    );
};

//""
