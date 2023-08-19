import { useColorModeValue, Container, HStack, Heading, IconButton, Flex, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider, Box, Image, useColorMode, Text, Icon } from "@chakra-ui/react";
import logo from "../../../../src/assets/images/logo.png"
import defaultUserImage from "../../../assets/images/default-user-image.svg"
import { FaRegMoon, FaSun, FaChevronDown } from "react-icons/fa";

export function Header() {
    const { toggleColorMode } = useColorMode();
    return (
        <Box
            width={'100%'}
            background={useColorModeValue("gray.100", "gray.700")}
            as='header'
        >
            <Container
                maxW='container.lg'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={".5rem 1rem"}
                gap={3}
            >
                <HStack>
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
                <HStack>
                    <IconButton
                        variant={'ghost'}
                        aria-label="Mudar tema"
                        icon={useColorModeValue(<FaRegMoon />, <FaSun />)}
                        onClick={toggleColorMode}
                    />
                    <Flex
                        alignItems={"center"}
                        justifyContent="center"
                        minW="48px"
                    >
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: "none" }}
                            >
                                <HStack gap={"8px"}>
                                    <Avatar
                                        size={"sm"}
                                        src={defaultUserImage}
                                        background={'gray.400'}
                                    />
                                    <Box display={{ base: "none", md: "flex" }}>
                                        <Icon as={FaChevronDown} />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue("white", "gray.700")}
                                borderColor={useColorModeValue(
                                    "gray.200",
                                    "gray.800"
                                )}
                            >
                                <MenuItem
                                    onClick={() =>
                                        console.log('editar perfil')
                                    }
                                >
                                    Editar perfil
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem>
                                    <Text color="red.500">Sair</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Container>
        </Box>
    )
}