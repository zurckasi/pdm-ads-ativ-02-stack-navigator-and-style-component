import React from "react";
import {Button} from "../../components/Button";
import {SplashContainer} from "../../components/SplashContainer";
import {SplashText} from "../../components/SplashText";
import {NavigationProps} from "../../types/navigation";

export const Splash = ({ navigation }: NavigationProps) => {
    return (

        <>
            <SplashContainer>
                <SplashText />
                <Button onPress={() => navigation.navigate("HomeTab")} />
            </SplashContainer>
        </>
        
    );
};
