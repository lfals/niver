import { VStack, useColorModeValue, HStack, Avatar, Heading, Badge, IconButton, Text } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { getPersonAge } from "../../../functions/date";
import defaultUserImage from "../../../assets/images/default-user-image.svg"
import { BirthdayPerson } from "../../../context/NiverContext";

interface NiverCardProps {
    person: BirthdayPerson;
}


export function NiverCard({ person }: NiverCardProps) {
    return (
        <VStack
            gap={'.625rem'}
            borderRadius={'6px'}
            background={useColorModeValue('gray.100', 'gray.700')}
            padding={'1rem'}
            w={'full'}
            alignItems={'flex-start'}
        >
            <HStack
                w={'full'}
                gap={'.625rem'}
            >
                <Avatar src={defaultUserImage} boxSize='48px' />
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
                            {person.tag}
                        </Badge>
                    </HStack>
                </VStack>
            </HStack>
            <Text textAlign={'justify'}>
                {person.description}
            </Text>
            <HStack w={'full'} gap={'.125rem'}>
                {person.socialMedia?.facebook && (<IconButton size={'md'} variant={'ghost'} aria-label="Facebook" icon={<FaFacebookF />} />)}
                {person.socialMedia?.instagram && (<IconButton size={'md'} variant={'ghost'} aria-label="Instagram" icon={<FaInstagram />} />)}
                {person.socialMedia?.linkedin && (<IconButton size={'md'} variant={'ghost'} aria-label="Linkedin" icon={<FaLinkedin />} />)}
                {person.socialMedia?.whatsapp && (<IconButton size={'md'} variant={'ghost'} aria-label="WhatsApp" icon={<FaWhatsapp />} />)}
                {person.socialMedia?.email && (<IconButton size={'md'} variant={'ghost'} aria-label="Email" icon={<FaEnvelope />} />)}
            </HStack>
        </VStack>
    )
}