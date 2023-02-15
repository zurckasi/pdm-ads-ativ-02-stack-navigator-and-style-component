import {ScrollView} from "native-base";
import React from "react";
import {Categories} from "../../components/Categories";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {Title} from "../../components/Title";
import {NavigationProps} from "../../types/navigation";

export const Resume = ({ navigation }: NavigationProps) => {
    return (
        <>
            <ScrollView>
                <Header>
                    <Title text="Resumo por categoria" />
                </Header>
                <Categories />
            </ScrollView>
            <Footer page="resume" navigation={navigation} />
        </>
    );
};
