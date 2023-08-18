import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../theme"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Routes"
export function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ChakraProvider>
    )
}