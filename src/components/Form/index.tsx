import AsyncStorage from "@react-native-async-storage/async-storage";
import createValidator from "class-validator-formik";
import { Formik } from "formik";
import { Alert, Box, HStack, Text, VStack } from "native-base";
import React, { useContext, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
    AlertNotificationRoot,
    ALERT_TYPE,
    Dialog,
} from "react-native-alert-notification";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import { ContexRecords } from "../../../App";
import { CreateDTO } from "../../dtos/Create.dto";
import { getAll } from "../../services/getAll";
import { items } from "../../services/items";
import { Record } from "../../types/record";
import { BtnInput } from "../BtnInput";
import { EntradaIcon } from "../EntradaIcon";
import { SaidaIcon } from "../SaidaIcon";
import { styles } from "./styles";

export const Form = () => {
    const [type, setType] = useState("income");
    const [category, setCategory] = useState("Outros");
    const appContext = useContext(ContexRecords);
    const handleCreate = async ({ category, name, price, type }: Record) => {
        try {
            const id = uuid.v4() as string;
            const jsonValue = JSON.stringify({
                category,
                name,
                price: price * 100,
                type,
                data: new Date(),
                id: id,
            });
            await AsyncStorage.setItem(id, jsonValue);
            const data = await getAll();
            appContext?.setRecords(data);
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Sucesso",
                textBody: "Registro feito com sucesso",
                button: "OK",
            });
        } catch (error) {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Ops...",
                textBody: "ocorreu um erro inesperado",
                button: "OK",
            });
        }
    };

    return (
        <>
            <AlertNotificationRoot
                children={
                    <Formik
                        validate={createValidator(CreateDTO)}
                        initialValues={{ name: "", price: "" }}
                        onSubmit={({ price, name }) =>
                            handleCreate({
                                category: category,
                                name,
                                price:
                                    parseFloat(price.replace(",", ".")) * 100,
                                type: type,
                            })
                        }
                    >
                        {({
                            values,
                            touched,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <VStack
                                style={styles.const}
                                space={4}
                                alignItems="center"
                            >
                                <TextInput
                                    placeholder="Nome"
                                    onBlur={handleBlur("name")}
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    style={styles.input}
                                />
                                {errors.name && touched.name ? (
                                    <Alert w="90%" status={"error"}>
                                        <Text fontSize="md" color="black">
                                            {errors.name}
                                        </Text>
                                    </Alert>
                                ) : null}
                                <TextInput
                                    placeholder="Preço"
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onBlur={handleBlur("price")}
                                    value={values.price}
                                    onChangeText={handleChange("price")}
                                />
                                {errors.price && touched.price ? (
                                    <Alert w="90%" status={"error"}>
                                        <Text fontSize="md" color="black">
                                            {errors.price}
                                        </Text>
                                    </Alert>
                                ) : null}
                                <Box>
                                    <HStack
                                        space={3}
                                        alignItems="center"
                                        justifyContent={"center"}
                                    >
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => setType("income")}
                                        >
                                            <Box
                                                bg={
                                                    type === "income"
                                                        ? "#89f1a2"
                                                        : "transparent"
                                                }
                                                style={styles.btnCategory}
                                            >
                                                <HStack
                                                    space={3}
                                                    alignItems="center"
                                                    justifyContent={"center"}
                                                >
                                                    <EntradaIcon
                                                        height="40"
                                                        width="40"
                                                    />
                                                    <Text
                                                        color={
                                                            type === "income"
                                                                ? "#ffffff"
                                                                : "#363F5F"
                                                        }
                                                        fontSize="lg"
                                                    >
                                                        Entrada
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => setType("outcome")}
                                        >
                                            <Box
                                                bg={
                                                    type === "outcome"
                                                        ? "#f57f92"
                                                        : "transparent"
                                                }
                                                style={styles.btnCategory}
                                            >
                                                <HStack
                                                    space={3}
                                                    alignItems="center"
                                                    justifyContent={"center"}
                                                >
                                                    <SaidaIcon
                                                        height="40"
                                                        width="40"
                                                    />
                                                    <Text
                                                        color={
                                                            type === "outcome"
                                                                ? "#ffffff"
                                                                : "#363F5F"
                                                        }
                                                        fontSize="lg"
                                                    >
                                                        Saída
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        </TouchableOpacity>
                                    </HStack>
                                    <Box style={styles.picke}>
                                        <RNPickerSelect
                                            value={category}
                                            onValueChange={(value) =>
                                                setCategory(value)
                                            }
                                            items={items}
                                        />
                                    </Box>
                                </Box>
                                <BtnInput onPress={handleSubmit} />
                            </VStack>
                        )}
                    </Formik>
                }
            />
        </>
    );
};
