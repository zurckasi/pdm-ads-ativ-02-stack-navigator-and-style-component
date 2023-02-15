import {Avatar, Box, HStack, Text} from "native-base";
import React from "react";
import {TouchableOpacity} from "react-native";
import {PowerIcon} from "../PowerIcon";
import {styles} from "./styled";

type Props = {
    navigation: any;
};

export const AvatarHeader = ({ navigation }: Props) => {
    return (

        <>
            <Box style={styles.container}>
                <HStack style={styles.cont}>
                    <HStack space={3} style={styles.avatarContainer}>
                        <Avatar
                            bg="info.200"
                            size="md"
                            source={require("../../assets/Avatar.png")}
                        />
                        <Box>
                            <Text style={styles.title} fontSize="md">
                                {"Olá,"}
                            </Text>
                            <Text bold style={styles.title} fontSize="md">
                                {"Weslley"}
                            </Text>
                        </Box>
                    </HStack>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Start")}
                        activeOpacity={0.8}
                    >
                        <PowerIcon height="30" width="30" />
                    </TouchableOpacity>
                </HStack>
            </Box>
        </>

    );
    
};
