export type NavigationProps = {
    navigate(arg0: string): void;
    navigation: {
        navigate: (path: string) => () => void;
    };
};
