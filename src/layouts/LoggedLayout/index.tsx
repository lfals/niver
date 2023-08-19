import { Container, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { NiverProvider } from "../../context/NiverContext";


export function LoggedLayout() {
    return (
        <NiverProvider>
            <VStack
                height={'100svh'}
            >
                <Header />
                <Container
                    maxW='container.lg'
                    py={'1rem'}
                >
                    <Outlet />
                </Container>
            </VStack>
        </NiverProvider>
    )
}

