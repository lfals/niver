import { useState } from "react";
import { Button, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HrDivider } from "../../components/Layout/Auth/HrDivider";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { registerInitialValues, registerValidationSchema } from "../../utils/forms/register";

export function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { onSignUp } = useAuth();

    const formik = useFormik({
        initialValues: registerInitialValues,
        validationSchema: registerValidationSchema,
        onSubmit: async values => {
            await onSignUp(values.name, values.email, values.password);
        }
    });

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <VStack
                gap={4}
            >
                <FormControl
                    isInvalid={!!formik.errors.name && formik.touched.name}
                >
                    <FormLabel>Nome</FormLabel>
                    <Input
                        placeholder="Insira seu nome"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        autoComplete="name"
                    />
                    <FormErrorMessage>{formik.errors?.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={!!formik.errors.email && formik.touched.email}
                >
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        placeholder="Insira seu email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoComplete="email"
                    />
                    <FormErrorMessage>{formik.errors?.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={!!formik.errors.password && formik.touched.password}
                >
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
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            autoComplete="current-password"
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
                    <FormErrorMessage>{formik.errors?.password}</FormErrorMessage>
                </FormControl>
                <Button
                    colorScheme='blue'
                    w={'100%'}
                    type="submit"
                    isLoading={formik.isSubmitting}
                    loadingText="Criando"
                    spinnerPlacement='end'
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
        </form>
    )
}