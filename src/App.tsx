import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../theme"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Routes/Routes"
import { AuthProvider } from "./context/AuthContext";
export function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </BrowserRouter>
        </ChakraProvider>
    )
}