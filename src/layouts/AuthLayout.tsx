import { Card, CardBody, Container, Heading, IconButton, Image, VStack, useColorMode } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/logo.png"

export function AuthLayout() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/auth/login' ? true : false;
    const { colorMode, toggleColorMode } = useColorMode();

    const isLightMode = colorMode === 'light' ? true : false;

    return (
        <VStack
            height={'100svh'}
            justifyContent={'center'}
        >
            <Container maxW='sm'>
                <Card>
                    <CardBody
                        p={{
                            base: 4,
                            md: 6
                        }}
                        position={'relative'}
                    >
                        <IconButton
                            position={'absolute'}
                            variant={'ghost'}
                            top={2}
                            right={2}
                            aria-label="Mudar tema"
                            icon={<FontAwesomeIcon icon={isLightMode ? faMoon : faSun} />}
                            onClick={toggleColorMode}
                        />
                        <VStack
                            alignItems={'center'}
                            gap={2}
                            mb={5}
                            as={'header'}
                        >
                            <Image
                                boxSize='64px'
                                objectFit='cover'
                                src={logo}
                            />
                            <Heading
                                as='h1'
                                size='lg'
                                fontSize={'24px'}
                                fontWeight={600}
                            >
                                {isLoginPage ? 'Faça login' : 'Crie sua conta'}
                            </Heading>
                        </VStack>
                        <Outlet />
                    </CardBody>
                </Card>
            </Container>
        </VStack>
    )
}

