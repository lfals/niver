import { Avatar, AvatarGroup, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { NiverContext } from "../../../context/NiverContext";
import { useContext } from "react";
import { getMonthString } from "../../../functions/date";

interface MonthButtonProps {
    month: string;
    isActive?: boolean;
}

export function MonthButton({ month, isActive = false }: MonthButtonProps) {
    const { setMonth, birthdayPersons } = useContext(NiverContext);
    const cardBackground = isActive ? useColorModeValue('gray.300', 'gray.600') : useColorModeValue('gray.100', 'gray.900');
    const isSeeAllMonths = month === 'ver todos';
    const birthdayPersonsOnMonth = birthdayPersons.filter(birthdayPerson => getMonthString(birthdayPerson.birthdate) === month);
    const hasBirthdayPersonsOnMonth = birthdayPersonsOnMonth.length > 0;

    return (
        <HStack
            w={'full'}
            h={'3rem'}
            py={'0.5rem'}
            px={'1rem'}
            gap={'1rem'}
            borderRadius={'6px'}
            background={cardBackground}
            cursor={'pointer'}
            transition={'all .2s ease'}
            onClick={() => setMonth(month)}
            _hover={{
                background: useColorModeValue('gray.300', 'gray.600')
            }}
        >
            <Heading
                as='h4'
                fontSize={'1.25rem'}
                fontWeight={600}
                display={'flex'}
                justifyContent={isSeeAllMonths ? 'center' : 'flex-start'}
                flex={1}
                _after={!isSeeAllMonths && hasBirthdayPersonsOnMonth ? {
                    content: `""`,
                    display: 'block',
                    background: useColorModeValue('gray.800', 'white'),
                    width: '1px',
                    marginLeft: 'auto'
                } : {}}
                textTransform={'capitalize'}
            >
                {month}
            </Heading>
            {!isSeeAllMonths && (
                hasBirthdayPersonsOnMonth && (
                    <AvatarGroup size='sm' max={2}>
                        {birthdayPersonsOnMonth.map(person => (
                            <Avatar key={person.id} name={person.name} src={person?.avatar} />
                        ))}
                    </AvatarGroup>
                )
            )}
        </HStack>
    )
}