import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ContexRecords } from "../../../App";
import { IContexRecords } from "../../types/contexRecords";
import { Records } from "../../types/records";
import { Card } from "../Card";
import { styles } from "./styles";

export const Scroll = () => {
    const { records } = useContext<IContexRecords>(ContexRecords as any);
    const [appetizer, setAppetizer] = useState(0);
    const [departures, setDepartures] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const subTotal = records.reduce(
            (accumulator, value: Records) =>
                value.type === "outcome"
                    ? accumulator - value.price
                    : accumulator + value.price,
            0
        );
        const subAppetizer = records.reduce(
            (accumulator, value: Records) =>
                value.type != "outcome"
                    ? accumulator + value.price
                    : accumulator + 0,
            0
        );

        const subDepartures = records.reduce(
            (accumulator, value: Records) =>
                value.type === "outcome"
                    ? accumulator + value.price
                    : accumulator + 0,
            0
        );

        setAppetizer(subAppetizer);
        setDepartures(subDepartures);
        setTotal(subTotal);
    }, [records]);

    return (
        <>
            <ScrollView
                style={styles.container}
                horizontal
                disableIntervalMomentum={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card valor={appetizer} typing="appetizer" />
                <Card valor={departures} typing="departures" />
                <Card valor={total} typing="total" />
            </ScrollView>
        </>
    );
};
