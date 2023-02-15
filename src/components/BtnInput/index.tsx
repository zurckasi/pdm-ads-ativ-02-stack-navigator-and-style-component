import { Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styled";

type Props = {
    onPress: () => void;
};

export const BtnInput = ({ onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            activeOpacity={0.8}
            style={styles.container}
        >
            <Text style={styles.text} fontSize="lg">
                Enviar
            </Text>
        </TouchableOpacity>
    );
};
