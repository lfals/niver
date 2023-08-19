import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, VStack, FormControl, FormLabel, Input, Select, Textarea, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BirthdayPerson, NiverContext } from "../../../context/NiverContext";
import { useContext } from "react";
interface ModalAddNiverProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAddNiver({ isOpen, onClose }: ModalAddNiverProps) {
    const { addNewPerson } = useContext(NiverContext);
    function handleAddNewPerson() {
        const person: BirthdayPerson = {
            id: '7',
            name: 'Pedro Raposo',
            birthdate: new Date('2000-08-14/'),
            tag: 'Amigo',
            description: 'Boiola',
            socialMedia: {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
            }
        }
        addNewPerson(person);
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Adicionar Aniversariante</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        gap={'1rem'}
                    >
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                type='text'
                                placeholder="Digite o nome"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input type='date' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Categoria</FormLabel>
                            <Select
                                placeholder="Selecione uma categoria"
                            >
                                <option value='1'>1</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Redes Socias</FormLabel>
                            <VStack
                                gap={'.5rem'}
                            >
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Icon as={FaFacebookF} />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Icon as={FaInstagram} />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Icon as={FaLinkedin} />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Icon as={FaWhatsapp} />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Icon as={FaEnvelope} />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                            </VStack>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                resize={'none'}
                                placeholder="Escreva uma descrição"
                            />
                        </FormControl>

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
                        onClick={handleAddNewPerson}
                    >
                        Salvar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}