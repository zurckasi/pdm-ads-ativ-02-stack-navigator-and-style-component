import React, { ReactNode } from "react";
import { Container } from "./styles";

type Pros = {
    children: ReactNode;
};

export const SplashContainer = ({ children }: Pros) => {
    return <Container>{children}</Container>;
};
