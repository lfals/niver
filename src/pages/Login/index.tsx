import { useState } from "react";
import { Button, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HrDivider } from "../../components/Layout/Auth/HrDivider";

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <VStack
            gap={4}
        >
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
                    <Link to='/auth/forgot-password'>
                        <Text
                            fontSize={'sm'}
                            color={'blue.400'}
                        >
                            Esqueceu sua senha?
                        </Text>
                    </Link>
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
                            icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                        />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme='blue'
                w={'100%'}
            >
                Entrar
            </Button>
            <Text
                fontSize={'sm'}
            >
                Não tem uma conta?
                <Link to='/auth/register'>
                    <Text
                        color={'blue.400'}
                        display={'inline'}
                        ps={1}
                        as={'span'}
                    >
                        Crie uma
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