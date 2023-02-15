import {ScrollView} from "native-base";
import {NavigationProps} from "../../types/navigation";
import {Footer} from "../../components/Footer";
import {Form} from "../../components/Form";
import {Header} from "../../components/Header";
import {Title} from "../../components/Title";
import React from "react";


export const Register = ({ navigation }: NavigationProps) => {
    return (
        <>
            <ScrollView>
                <Header>
                    <Title text="Cadastro" />
                </Header>
                <Form />
            </ScrollView>
            <Footer page="register" navigation={navigation} />
        </>
    );
};
