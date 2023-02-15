import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts,
} from "@expo-google-fonts/poppins";
import {Box, NativeBaseProvider} from "native-base";
import React, {createContext, useEffect, useState} from "react";
import {Records} from "./src/types/records";
import {LogBox} from "react-native";
import {IContexRecords} from "./src/types/contexRecords";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Routes} from "./Routes";
import {getAll} from "./src/services/getAll";
import {theme} from "./src/theme";



export const ContexRecords = createContext<IContexRecords | null>(null);

export default function App() {
    const [records, setRecords] = useState<Records[]>([]);
    LogBox.ignoreLogs(["Warning: ..."]);
    LogBox.ignoreAllLogs();

    useEffect(() => {
        (async () => {
            const data = await getAll() as Records[];
            setRecords(data);
        })();
    }, []);

    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_500Medium, 
        Poppins_600SemiBold,
        Poppins_400Regular,
        
    });
    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NativeBaseProvider theme={theme}>
                    <Box bg={"primary.900"} safeAreaTop />
                    <ContexRecords.Provider value={{ records, setRecords }}>
                        <Routes />
                    </ContexRecords.Provider>
                </NativeBaseProvider>
            </GestureHandlerRootView>
        );
    }
}
