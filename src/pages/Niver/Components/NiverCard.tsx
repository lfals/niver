import { VStack, useColorModeValue, HStack, Avatar, Heading, Badge, IconButton, Text, Link, Menu, MenuButton, MenuItem, MenuList, Box, useDisclosure } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { getPersonAge } from "../../../functions/date";
import defaultUserImage from "../../../assets/images/default-user-image.svg"
import { BirthdayPerson } from "../../../context/NiverContext";
import { removePhoneMask } from "../../../utils/masks";
import { translateTag } from "../../../utils/translate";
import { ModalDeleteNiver } from "./Modals/ModalDeleteNiver";
import { ModalEditNiver } from "./Modals/ModalEditNiver";

interface NiverCardProps {
    person: BirthdayPerson;
}


export function NiverCard({ person }: NiverCardProps) {
    const {
        isOpen: modalDeleteIsOpen,
        onOpen: modalDeleteOnOpen,
        onClose: modalDeleteOnClose
    } = useDisclosure();

    const {
        isOpen: modalEditIsOpen,
        onOpen: modalEditOnOpen,
        onClose: modalEditOnClose
    } = useDisclosure();

    return (
        <>
            <VStack
                gap={'.625rem'}
                borderRadius={'6px'}
                background={useColorModeValue('gray.100', 'gray.700')}
                padding={'1rem'}
                w={'full'}
                alignItems={'flex-start'}
                position={'relative'}
            >
                <Box
                    position={'absolute'}
                    right={'1rem'}
                    top={'1rem'}
                >
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaEllipsisV />}
                            variant='outline'
                            size={'sm'}
                        />
                        <MenuList>
                            <MenuItem
                                icon={<FaEdit />}
                                onClick={modalEditOnOpen}
                            >
                                Editar
                            </MenuItem>
                            <MenuItem
                                icon={<FaTrash />}
                                color={'red.400'}
                                onClick={modalDeleteOnOpen}
                            >
                                Deletar
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <HStack
                    w={'full'}
                    gap={'.625rem'}
                    width={'90%'}
                >
                    <Avatar src={person.avatar || defaultUserImage} boxSize='48px' />
                    <VStack
                        alignItems={'flex-start'}
                        gap={'0.375rem'}
                    >
                        <Heading
                            size={'md'}
                            fontWeight={600}
                        >
                            {person.name} - {getPersonAge(person.birthdate)}
                        </Heading>
                        <HStack
                            gap={'.5rem'}
                        >
                            <Badge
                                colorScheme={'blue'}
                            >
                                {translateTag(person.tag)}
                            </Badge>
                        </HStack>
                    </VStack>
                </HStack>
                <Text textAlign={'justify'}>
                    {person.description}
                </Text>
                <HStack w={'full'} gap={'.125rem'}>
                    {person.social?.facebook && (
                        <Link href={person.social?.facebook} target="_blank">
                            <IconButton size={'md'} variant={'ghost'} aria-label="Facebook" icon={<FaFacebookF />} />
                        </Link>
                    )}
                    {person.social?.instagram && (
                        <Link href={person.social?.instagram} target="_blank">
                            <IconButton size={'md'} variant={'ghost'} aria-label="Instagram" icon={<FaInstagram />} />
                        </Link>
                    )}
                    {person.social?.linkedin && (
                        <Link href={person.social?.linkedin} target="_blank">
                            <IconButton size={'md'} variant={'ghost'} aria-label="Linkedin" icon={<FaLinkedin />} />
                        </Link>
                    )}
                    {person.social?.whatsapp && (
                        <Link href={`https://wa.me/55${removePhoneMask(person.social?.whatsapp)}`} target="_blank">
                            <IconButton size={'md'} variant={'ghost'} aria-label="WhatsApp" icon={<FaWhatsapp />} />
                        </Link>
                    )}
                    {person.social?.email && (
                        <Link href={`maito:${person.social?.email}`}>
                            <IconButton size={'md'} variant={'ghost'} aria-label="Email" icon={<FaEnvelope />} />
                        </Link>
                    )}
                </HStack>
            </VStack>
            <ModalEditNiver isOpen={modalEditIsOpen} onClose={modalEditOnClose} person={person} />
            <ModalDeleteNiver isOpen={modalDeleteIsOpen} onClose={modalDeleteOnClose} id={person.id} />
        </>

    )
}