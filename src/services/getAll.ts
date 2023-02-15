import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAll = async ()  => {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);

    const getAll = values.map((data) => {
        return JSON.parse(data[1] as string);
    });
    
    return getAll;
}