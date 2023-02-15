import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: "none" },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="Resume" component={Resume} />
        </Tab.Navigator>
    );
};
