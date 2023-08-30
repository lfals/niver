import { Avatar, AvatarGroup, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { NiverContext } from "../../../context/NiverContext";
import { useContext } from "react";

interface MonthButtonProps {
    month: string;
    isActive?: boolean;
}

export function MonthButton({ month, isActive = false }: MonthButtonProps) {
    const { setMonth } = useContext(NiverContext);
    const cardBackground = isActive ? useColorModeValue('gray.300', 'gray.600') : useColorModeValue('gray.100', 'gray.900');
    const isSeeAllMonths = month === 'ver todos';
    return (
        <HStack
            w={'full'}
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
                _after={!isSeeAllMonths ? {
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
                <AvatarGroup size='sm' max={2}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
            )}
        </HStack>
    )
}