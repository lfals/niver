import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import banner_img from "../../../../src/assets/images/banner-img.svg";
export function Banner() {

    return (
        <>
            <Container
                maxW='container.lg'
                mt={'3rem'}
            >
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: '1fr 1fr'
                    }}
                    gap={'1.5rem'}
                >
                    <GridItem w={'100%'} h={'100%'}>
                        <VStack
                            h={'100%'}
                            justifyContent={'center'}
                        >
                            <Heading
                                fontSize={'5xl'}
                                fontWeight={'light'}
                            >
                                Em <Box as="span" fontWeight={'semibold'}>Níver</Box>, celebramos a vida, um aniversário de cada vez.
                            </Heading>
                            <Text
                                mt={'1rem'}
                                fontSize={'lg'}
                                color={'gray.400'}
                            >
                                Mantendo vivas as datas especiais, fortalecendo laços e nunca mais esquecendo um aniversário importante.
                            </Text>
                        </VStack>
                    </GridItem>
                    <GridItem w={'100%'} h={'100%'}>
                        <VStack
                            h={'100%'}
                            justifyContent={'center'}
                        >
                            <Image src={banner_img} alt="Banner" />
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}