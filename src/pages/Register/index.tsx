import { useState } from "react";
import { Button, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { HrDivider } from "../../components/Layout/Auth/HrDivider";

export function Register() {
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <VStack
            gap={4}
        >
            <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                    type='text'
                    placeholder="Insira seu nome"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    type='email'
                    placeholder="Insira seu email"
                />
            </FormControl>
            <FormControl>
                <FormLabel
                    display='flex'
                    justifyContent='space-between'
                    alignContent='center'
                    me={0}
                >
                    Senha
                </FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Insira sua senha'
                    />
                    <InputRightElement>
                        <IconButton
                            size='sm'
                            variant={'ghost'}
                            onClick={handleShowPassword}
                            aria-label="Mostre a senha"
                            icon={<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />}
                        />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme='blue'
                w={'100%'}
            >
                Criar conta
            </Button>
            <Text
                fontSize={'sm'}
            >
                Já tem uma conta?
                <Link to='/auth/login'>
                    <Text
                        color={'blue.400'}
                        display={'inline'}
                        ps={1}
                        as={'span'}
                    >
                        Entrar
                    </Text>
                </Link>
            </Text>
            <HrDivider />
            <Button>
                Entrar com o google
            </Button>
        </VStack>
    )
}