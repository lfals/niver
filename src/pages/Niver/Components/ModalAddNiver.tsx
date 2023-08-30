import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, VStack, FormControl, FormLabel, Input, Select, Textarea, InputGroup, InputLeftElement, Icon, FormErrorMessage, Avatar, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { NiverContext } from "../../../context/NiverContext";
import { useContext, useRef } from "react";
import { useFormik } from "formik";
import { addNiverInitialValues, addNiverValidationSchema } from "../../../utils/forms/addNiver";
import { phoneMask } from "../../../utils/masks";
import { TagsOptions } from "../../../components/Logged/Niver/TagsOptions";
import { AvatarInput } from "../../../components/Logged/AvatarInput";
interface ModalAddNiverProps {
    isOpen: boolean;
    onClose: () => void;
}


export function ModalAddNiver({ isOpen, onClose }: ModalAddNiverProps) {
    const { addNewPerson } = useContext(NiverContext);

    const formik = useFormik({
        initialValues: addNiverInitialValues,
        validationSchema: addNiverValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={formik.handleSubmit}>
                    <ModalHeader>Adicionar Aniversariante</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack
                            gap={'1rem'}
                        >
                            <AvatarInput
                                formik={formik}
                            />
                            <FormControl
                                isInvalid={!!formik.errors?.name && formik.touched?.name}
                            >
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    type='text'
                                    placeholder="Digite o nome"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                <FormErrorMessage>{formik.errors?.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl
                                isInvalid={!!formik.errors?.birthdate && formik.touched?.birthdate}
                            >
                                <FormLabel>Data de nascimento</FormLabel>
                                <Input
                                    type='date'
                                    name="birthdate"
                                    value={formik.values.birthdate}
                                    onChange={formik.handleChange}
                                />
                                <FormErrorMessage>{formik.errors?.birthdate}</FormErrorMessage>
                            </FormControl>
                            <FormControl
                                isInvalid={!!formik.errors?.tag && formik.touched?.tag}
                            >
                                <FormLabel>Categoria</FormLabel>
                                <Select
                                    placeholder="Selecione uma categoria"
                                    name="tag"
                                    value={formik.values.tag}
                                    onChange={formik.handleChange}
                                >
                                    <TagsOptions />
                                </Select>
                                <FormErrorMessage>{formik.errors?.tag}</FormErrorMessage>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    resize={'none'}
                                    placeholder="Escreva uma descrição"
                                />
                            </FormControl>

                            <Accordion
                                w={'100%'}
                                allowMultiple
                            >
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Redes Sociais
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <FormControl>
                                            <VStack
                                                gap={'.5rem'}
                                            >
                                                <FormControl
                                                    isInvalid={!!formik.errors?.social?.facebook && formik.touched?.social?.facebook}
                                                >
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Icon as={FaFacebookF} />
                                                        </InputLeftElement>
                                                        <Input
                                                            type='text'
                                                            placeholder='facebook.com/pagina_da_pessoa'
                                                            id="social.facebook"
                                                            name="social.facebook"
                                                            value={formik.values.social?.facebook}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>{formik.errors?.social?.facebook}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl
                                                    isInvalid={!!formik.errors?.social?.instagram && formik.touched?.social?.instagram}
                                                >
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Icon as={FaInstagram} />
                                                        </InputLeftElement>
                                                        <Input
                                                            type='text'
                                                            placeholder='instagram.com/pagina_da_pessoa'
                                                            id="social.instagram"
                                                            name="social.instagram"
                                                            value={formik.values.social?.instagram}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>{formik.errors?.social?.instagram}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl
                                                    isInvalid={!!formik.errors?.social?.linkedin && formik.touched?.social?.linkedin}
                                                >
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Icon as={FaLinkedin} />
                                                        </InputLeftElement>
                                                        <Input
                                                            type='text'
                                                            placeholder='linkedin.com/pagina_da_pessoa'
                                                            id="social.linkedin"
                                                            name="social.linkedin"
                                                            value={formik.values.social?.linkedin}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>{formik.errors?.social?.linkedin}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl
                                                    isInvalid={!!formik.errors?.social?.whatsapp && formik.touched?.social?.whatsapp}
                                                >
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Icon as={FaWhatsapp} />
                                                        </InputLeftElement>
                                                        <Input
                                                            type='text'
                                                            placeholder='(XX) XXXXX-XXXX'
                                                            id="social.whatsapp"
                                                            name="social.whatsapp"
                                                            value={phoneMask(formik.values.social?.whatsapp)}
                                                            onChange={(e) => {
                                                                const value = phoneMask(e.target.value);
                                                                formik.setFieldValue(
                                                                    "social.whatsapp",
                                                                    value
                                                                );
                                                            }}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>{formik.errors?.social?.whatsapp}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl
                                                    isInvalid={!!formik.errors?.social?.email && formik.touched?.social?.email}
                                                >
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <Icon as={FaEnvelope} />
                                                        </InputLeftElement>
                                                        <Input
                                                            type='email'
                                                            placeholder='email@email.com'
                                                            id="social.email"
                                                            name="social.email"
                                                            value={formik.values.social?.email}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>{formik.errors?.social?.email}</FormErrorMessage>
                                                </FormControl>

                                            </VStack>
                                        </FormControl>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button

                            mr={3}
                            onClick={onClose}
                            size={'sm'}
                        >
                            Fechar
                        </Button>
                        <Button
                            colorScheme='blue'
                            size={'sm'}
                            type="submit"
                        >
                            Salvar
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}