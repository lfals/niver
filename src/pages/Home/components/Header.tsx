import { useColorModeValue, Container, HStack, Heading, IconButton, Flex, Box, Image, useColorMode, Button } from "@chakra-ui/react";
import logo from "../../../../src/assets/images/logo.png"
import { FaRegMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { toggleColorMode } = useColorMode();
    const navigate = useNavigate();

    function handleClickLogin() {
        navigate('/auth/login');
    }

    function handleClickRegister() {
        navigate('/auth/register');
    }

    return (
        <Box
            width={'100%'}
            as='header'
        >
            <Container
                maxW='container.lg'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={".75rem 1rem"}
                gap={3}
            >
                <HStack
                    cursor={'pointer'}
                    href="#"
                    as={'a'}
                >
                    <Image
                        boxSize='46px'
                        objectFit='cover'
                        src={logo}
                    />
                    <Heading
                        as='h2'
                        fontSize={'1.75rem'}
                        letterSpacing={'1px'}
                    >
                        Niver
                    </Heading>
                </HStack>
                <HStack
                    gap={'.75rem'}
                >
                    <IconButton
                        variant={'ghost'}
                        aria-label="Mudar tema"
                        icon={useColorModeValue(<FaRegMoon />, <FaSun />)}
                        onClick={toggleColorMode}
                        size={'sm'}
                    />
                    <Flex
                        alignItems={"center"}
                        justifyContent="center"
                        minW="48px"
                        gap={'.75rem'}
                    >
                        <Button
                            variant={'solid'}
                            colorScheme="blue"
                            onClick={handleClickLogin}
                            size={'sm'}
                        >
                            Entrar
                        </Button>
                        <Button
                            variant={'outline'}
                            colorScheme="blue"
                            onClick={handleClickRegister}
                            size={'sm'}
                        >
                            Criar conta
                        </Button>
                    </Flex>
                </HStack>
            </Container>
        </Box>
    )
}