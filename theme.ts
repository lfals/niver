import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const styles = {
    global: {
        "body, input, button, textarea": {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
        },
    },
};

export const theme = extendTheme({
    config,
    styles,
});
