import { useRef, useContext, useState } from "react";
import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import { FilterForm, NiverContext } from "../../../context/NiverContext";
import { TagsOptions } from "../../../components/Logged/Niver/TagsOptions";

const initialFilterData: FilterForm = {
    name: '',
    tag: ''
}

export function Filter() {
    const { filterPersons } = useContext(NiverContext);
    const [filterData, setFilterData] = useState<FilterForm>(initialFilterData);
    const initialFocusRef = useRef<HTMLInputElement>(null!);

    function handleFilter(e: React.FormEvent) {
        e.preventDefault();
        filterPersons(filterData);
    }

    function handleResetFilter() {
        setFilterData(initialFilterData);
        filterPersons(initialFilterData);
    }

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
                    <form onSubmit={handleFilter}>
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
                                        value={filterData.name}
                                        onChange={e => setFilterData({ ...filterData, name: e.target.value })}
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
                                        value={filterData.tag}
                                        onChange={e => setFilterData({ ...filterData, tag: e.target.value })}
                                        placeholder='Selecione'
                                        size={'sm'}
                                    >
                                        <TagsOptions />
                                    </Select>
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
                                onClick={handleResetFilter}
                            >
                                Resetar
                            </Button>
                            <Button
                                colorScheme='blue'
                                variant='solid'
                                size={'sm'}
                                type="submit"
                            >
                                Filtrar
                            </Button>
                        </PopoverFooter>
                    </form>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}