import { Button, Flex, Grid, GridItem, Hide, Select, Show, Stack, Text, VStack, useColorModeValue, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Filter } from "./Components/Filter";
import { ModalAddNiver } from "./Components/ModalAddNiver";
import { allMonthOptions, getDayAndMonth, getDayOfMonth } from "../../functions/date";
import { MonthButton } from "./Components/MonthButton";
import { useContext } from "react";
import { NiverContext } from "../../context/NiverContext";
import { NiverCard } from "./Components/NiverCard";


export function Niver() {
    const { isOpen: isModalAddOpen, onOpen: onModalAddOpen, onClose: onModalAddClose } = useDisclosure();
    const { filteredBirthdayPersons, month } = useContext(NiverContext);

    const [isMobileView] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Flex
                w="100%"
                justifyContent={'flex-end'}
                gap={".5rem"}
                mb={"1rem"}
            >
                <Filter />
                <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={onModalAddOpen}
                >
                    Adicionar Aniversariante
                </Button>
            </Flex>
            <Show below="md">
                <Select mb={"1rem"}>
                    {allMonthOptions.map(month => <option key={month}>{month}</option>)}
                </Select>
            </Show>
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "300px 1fr"
                }}
                gap={"1rem"}
            >
                <Hide below='lg'>
                    <GridItem>
                        <VStack
                            gap={'0.625rem'}
                        >
                            {allMonthOptions.map(monthName => (
                                <MonthButton
                                    key={monthName}
                                    month={monthName}
                                    isActive={monthName === month}
                                />
                            ))}
                        </VStack>
                    </GridItem>
                </Hide>
                <GridItem>
                    <VStack
                        gap={'1rem'}
                    >
                        {filteredBirthdayPersons.map(person => (
                            <Stack
                                alignItems={'center'}
                                w={'full'}
                                gap={{ base: '.125rem', md: '1rem' }}
                                direction={{ base: 'column', md: 'row' }}
                                borderBottom={{
                                    base: '1px',
                                    md: 'none'
                                }}
                                paddingBottom={{ base: '1.375rem', md: 'none' }}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                            >
                                {/* Exibição do dia */}
                                <VStack
                                    minW={'80px'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Show
                                        above="md"
                                    >
                                        <Text>
                                            Dia
                                        </Text>
                                    </Show>
                                    <Text
                                        fontSize={{
                                            base: '1.5rem',
                                            md: '2rem'
                                        }}
                                        fontWeight={{
                                            base: 400,
                                            md: 600
                                        }}
                                    >
                                        {isMobileView ? getDayAndMonth(person.birthdate) : getDayOfMonth(person.birthdate)}
                                    </Text>
                                </VStack>
                                {/* Exibição do card */}
                                <NiverCard person={person} />
                            </Stack>
                        ))}
                    </VStack>
                </GridItem>
            </Grid>
            <ModalAddNiver isOpen={isModalAddOpen} onClose={onModalAddClose} />
        </>
    )
}