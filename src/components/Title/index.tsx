import { Box, Text } from "native-base";
import React from "react";
import { styles } from "./styles";

type Props = {
    text: string;
};

export const Title = ({ text }: Props) => {
    return (
        <>
            <Box style={styles.container}>
                <Text style={styles.text} fontSize="3xl">
                    {text}
                </Text>
            </Box>
        </>
    );
};
