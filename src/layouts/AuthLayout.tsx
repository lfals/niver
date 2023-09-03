import { Box, Card, CardBody, Container, Heading, IconButton, Image, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaRegMoon, FaSun } from "react-icons/fa";
import logo from "../../src/assets/images/logo.png"

export function AuthLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoginPage = location.pathname === '/auth/login' ? true : false;
    const { toggleColorMode } = useColorMode();
    function handleHomeClick() {
        navigate('/');
    }
    return (
        <VStack
            height={'100svh'}
            justifyContent={'center'}
        >
            <Container maxW='md'>
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
                            icon={useColorModeValue(<FaRegMoon />, <FaSun />)}
                            onClick={toggleColorMode}
                        />
                        <VStack
                            alignItems={'center'}
                            gap={2}
                            mb={5}
                        >
                            <Box
                                as="a"
                                onClick={handleHomeClick}
                                cursor={'pointer'}
                            >
                                <Image
                                    boxSize='64px'
                                    objectFit='cover'
                                    src={logo}
                                />
                            </Box>
                            <Heading
                                as='h1'
                                size='lg'
                                fontSize={'1.5rem'}
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

