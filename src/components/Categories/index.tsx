import moment from "moment";
import { Box, HStack, Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { ContexRecords } from "../../../App";
import { IContexRecords } from "../../types/contexRecords";
import { styles } from "./styled";

export const Categories = () => {
    const [date, setDate] = useState<any>(new Date());
    const { records } = useContext<IContexRecords>(ContexRecords as any);
    return (
        <>
            <HStack style={styles.containerData}>
                <TouchableOpacity
                    onPress={() =>
                        setDate(moment(date).subtract(1, "month").calendar())
                    }
                    activeOpacity={0.8}
                >
                    <Icon name="chevron-left" size={30} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.text} fontSize="3xl">
                    {moment(date).format("MMMM,YYYY")}
                </Text>
                <TouchableOpacity
                    onPress={() =>
                        setDate(moment(date).add(1, "month").calendar())
                    }
                    activeOpacity={0.8}
                >
                    <Icon name="chevron-right" size={30} color="#000000" />
                </TouchableOpacity>
            </HStack>
            <Box style={styles.container}>
                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Moradia
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$1.200
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        TV / Internet / Telefone
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$700
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Transporte
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$500
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Lazer
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$500
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Saúde
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$700
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Venda
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$1.200
                    </Text>
                </HStack>

                <HStack style={styles.iten}>
                    <Text color={"#363F5F"} fontSize="md">
                        Outros
                    </Text>
                    <Text bold color={"#363F5F"} fontSize="md">
                        R$1.200
                    </Text>
                </HStack>
            </Box>
        </>
    );
};
