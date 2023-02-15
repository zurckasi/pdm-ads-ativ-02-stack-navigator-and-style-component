import { Box, Text } from "native-base";
import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ContexRecords } from "../../../App";
import { IContexRecords } from "../../types/contexRecords";
import { Records } from "../../types/records";
import { Item } from "../Item";
import { styles } from "./styles";

export const List = () => {
    const { records } = useContext<IContexRecords>(ContexRecords as any);
    return (
        <>
            <Box style={styles.container}>
                <Text fontSize="lg">Listagem</Text>
                <FlatList<Records>
                    data={records as Records[]}
                    renderItem={(item) => (
                        <Box>
                            <Item item={item} />
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </>
    );
};
