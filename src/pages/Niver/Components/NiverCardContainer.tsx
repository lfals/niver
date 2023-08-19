import { useContext } from "react";
import { VStack, Stack, useColorModeValue, Show, Text, useMediaQuery } from "@chakra-ui/react";
import { getDayAndMonth, getDayOfMonth, getMonthString } from "../../../functions/date";
import { NiverCard } from "./NiverCard";
import { NiverContext } from "../../../context/NiverContext";

export function NiverCardContainer() {
    const { filteredBirthdayPersons, month, filteredByForm } = useContext(NiverContext);
    const [isMobileView] = useMediaQuery('(max-width: 768px)');
    const isSeeAllMonths = month === 'ver todos';
    const noBirthdayPersons = filteredBirthdayPersons.length === 0;

    return (
        <VStack
            gap={'1rem'}
        >
            {filteredBirthdayPersons.map(person => (
                <Stack
                    key={person.id}
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
                            <Text
                                textTransform={'capitalize'}
                            >
                                {isSeeAllMonths ? getMonthString(person.birthdate) : 'dia'}
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
            {
                noBirthdayPersons &&
                <Text
                    fontSize={'1.5rem'}
                    fontWeight={600}
                    textAlign={'center'}
                >
                    {filteredByForm ?
                        'Nenhum aniversariante encontrado com esses filtros'
                        : 'Nenhum aniversariante cadastrado'}
                </Text>
            }

        </VStack>

    )
}