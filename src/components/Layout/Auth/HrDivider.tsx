import { HStack, Text } from "@chakra-ui/react";

export function HrDivider() {
    return (
        <HStack
            w={'100%'}
            justifyContent={'center'}
            gap={2}
            _before={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: 'gray.300',
                flex: '1 0 auto'
            }}
            _after={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: 'gray.300',
                flex: '1 0 auto'
            }}
        >
            <Text fontSize={'sm'}>ou</Text>
        </HStack>
    )
}