import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, FormControl, FormLabel, Input, FormErrorMessage, Select, Textarea, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, InputGroup, InputLeftElement, Icon, ModalFooter, Button, Box } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { AvatarInput } from "../../../../components/Logged/AvatarInput";
import { TagsOptions } from "../../../../components/Logged/Niver/TagsOptions";
import { phoneMask } from "../../../../utils/masks";
import { FormikProps } from "formik";
import { niverInitialValues } from "../../../../utils/forms/addNiver";

interface ModalNiverProps {
    isOpen: boolean;
    onClose: () => void;
    formik: FormikProps<typeof niverInitialValues>;
    type: 'add' | 'edit';
}

export function ModalNiver({ isOpen, onClose, formik, type }: ModalNiverProps) {
    const modalTitle = type === 'add' ? 'Adicionar' : 'Editar';
    const buttonText = type === 'add' ? 'Adicionar' : 'Salvar';

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={formik.handleSubmit}>
                    <ModalHeader>{`${modalTitle} Aniversariante`}</ModalHeader>
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

                            <FormControl
                                isInvalid={!!formik.errors?.description && formik.touched?.description}
                            >
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    resize={'none'}
                                    placeholder="Escreva uma descrição"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                />
                                <FormErrorMessage>{formik.errors?.description}</FormErrorMessage>
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
                            {buttonText}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}