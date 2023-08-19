import { useRef } from "react";
import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
export function Filter() {
    const initialFocusRef = useRef<HTMLInputElement>(null!);
    return (
        <Popover
            initialFocusRef={initialFocusRef}
        >
            <PopoverTrigger>
                <Button
                    colorScheme="blue"
                    size="sm"
                    variant={'outline'}
                >
                    Filtrar
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Filtro</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <VStack gap={3}>
                            <FormControl>
                                <FormLabel
                                    fontSize={'sm'}
                                >
                                    Nome
                                </FormLabel>
                                <Input
                                    size={'sm'}
                                    type='text'
                                    placeholder="Digite o nome do aniversariante"
                                    ref={initialFocusRef}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel
                                    fontSize={'sm'}
                                >
                                    Categoria
                                </FormLabel>
                                <Select
                                    placeholder='Selecione'
                                    size={'sm'}
                                />
                            </FormControl>
                        </VStack>
                    </PopoverBody>
                    <PopoverFooter
                        display="flex"
                        justifyContent="flex-end"
                        gap={2}
                    >
                        <Button
                            colorScheme='blue'
                            variant='outline'
                            size={'sm'}
                        >
                            Resetar
                        </Button>
                        <Button
                            colorScheme='blue'
                            variant='solid'
                            size={'sm'}
                        >
                            Filtrar
                        </Button>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}