import { Button, Flex, Grid, GridItem, Hide, Select, Show, VStack, useDisclosure } from "@chakra-ui/react";
import { Filter } from "./Components/Filter";
import { ModalAddNiver } from "./Components/Modals/ModalAddNiver";
import { allMonthOptions } from "../../functions/date";
import { MonthButton } from "./Components/MonthButton";
import { useContext } from "react";
import { NiverContext } from "../../context/NiverContext";
import { NiverCardContainer } from "./Components/NiverCardContainer";



export function Niver() {
    const { isOpen: isModalAddOpen, onOpen: onModalAddOpen, onClose: onModalAddClose } = useDisclosure();
    const { month } = useContext(NiverContext);

    return (
        <>
            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "300px 1fr"
                }}
                gap={"1rem"}
            >
                <Hide below='md'>
                    <GridItem>
                        <VStack
                            gap={'0.625rem'}
                        >
                            {allMonthOptions.map(monthOption => (
                                <MonthButton
                                    key={monthOption}
                                    month={monthOption}
                                    isActive={monthOption === month}
                                />
                            ))}
                        </VStack>
                    </GridItem>
                </Hide>
                <GridItem>
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
                            {allMonthOptions.map(monthOption => <option key={monthOption}>{monthOption}</option>)}
                        </Select>
                    </Show>
                    <NiverCardContainer />
                </GridItem>
            </Grid>
            <ModalAddNiver isOpen={isModalAddOpen} onClose={onModalAddClose} />
        </>
    )
}