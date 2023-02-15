import { Box, HStack } from "native-base";
import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { CadastarIcon } from "../CadastarIcon";
import { ListagemIcon } from "../ListagemIcon";
import { ResumoIcon } from "../ResumoIcon";
import { styles } from "./styles";

type Props = {
    navigation: any;
    page: string;
};

export const Footer = ({ navigation, page }: Props) => {
    const [sizeHeader, setSizeHeader] = useState(true);
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
        setSizeHeader(false);
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
        setSizeHeader(true);
    });
    return sizeHeader ? (
        <>
            <Box style={styles.container}>
                <HStack style={styles.cont}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        activeOpacity={0.8}
                    >
                        <ListagemIcon
                            color={page === "home" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                        activeOpacity={0.8}
                    >
                        <CadastarIcon
                            color={page === "register" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Resume")}
                        activeOpacity={0.8}
                    >
                        <ResumoIcon
                            color={page === "resume" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                </HStack>
            </Box>
        </>
    ):(null);
};
