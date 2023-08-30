import { useState, useEffect } from 'react';
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, IconButton, Button, Card, CardBody, Container, Heading, FormErrorMessage } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { initialValues, validationSchema } from '../../utils/forms/editUser';
import { AvatarInput } from '../../components/Logged/AvatarInput';

export function EditUser() {
    const { user } = useAuth();
    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const formatedValues: any = {
                ...values
            }
            if (!formatedValues.newPassword) delete formatedValues.newPassword;
            if (formatedValues.avatar === user.avatar || !formatedValues.avatar) delete formatedValues.avatar;
            if (formatedValues.name === user.name) delete formatedValues.name;
            if (formatedValues.email === user.email) delete formatedValues.email;


        }
    });

    useEffect(() => {
        if (!user.name || !user.email) return;
        formik.setValues(values => {
            return {
                ...values,
                avatar: user.avatar || '',
                name: user.name,
                email: user.email
            }
        })
    }, [user])

    function handleShowPassword(password: 'currentPassword' | 'newPassword') {
        if (password === 'currentPassword') {
            setShowPassword(state => {
                return {
                    ...state,
                    currentPassword: !showPassword.currentPassword
                }
            });
        } else {
            setShowPassword(state => {
                return {
                    ...state,
                    newPassword: !showPassword.newPassword
                }
            });
        }
    }

    return (
        <VStack justifyContent={'center'}>
            <Container maxW='md'>
                <Card>
                    <CardBody
                        p={{
                            base: 4,
                            md: 6
                        }}
                    >
                        <VStack
                            alignItems={'center'}
                            gap={2}
                            mb={5}
                        >
                            <Heading
                                as='h1'
                                size='lg'
                                fontSize={'1.5rem'}
                                fontWeight={600}
                            >
                                Edite sua conta
                            </Heading>
                        </VStack>
                        <form onSubmit={formik.handleSubmit}>
                            <VStack
                                gap={4}
                            >
                                <AvatarInput formik={formik} />
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
                                        Senha atual
                                    </FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={showPassword.currentPassword ? 'text' : 'password'}
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
                                                onClick={() => handleShowPassword('currentPassword')}
                                                aria-label="Mostre a senha"
                                                icon={showPassword.currentPassword ? <FaEye /> : <FaEyeSlash />}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{formik.errors?.password}</FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={!!formik.errors.newPassword && formik.touched.newPassword}
                                >
                                    <FormLabel
                                        display='flex'
                                        justifyContent='space-between'
                                        alignContent='center'
                                        me={0}
                                    >
                                        Nova senha
                                    </FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={showPassword.currentPassword ? 'text' : 'password'}
                                            placeholder='Insira sua nova senha'
                                            id='newPassword'
                                            name='newPassword'
                                            onChange={formik.handleChange}
                                            value={formik.values.newPassword}
                                            autoComplete='false'
                                        />
                                        <InputRightElement>
                                            <IconButton
                                                size='sm'
                                                variant={'ghost'}
                                                onClick={() => handleShowPassword('currentPassword')}
                                                aria-label="Mostre a senha"
                                                icon={showPassword.currentPassword ? <FaEye /> : <FaEyeSlash />}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{formik.errors?.newPassword}</FormErrorMessage>
                                </FormControl>
                                <Button
                                    colorScheme='blue'
                                    w={'100%'}
                                    type="submit"
                                    // isLoading={formik.isSubmitting}
                                    loadingText="Editando"
                                    spinnerPlacement='end'
                                >
                                    Editar conta
                                </Button>
                            </VStack>
                        </form>
                    </CardBody>
                </Card>
            </Container>
        </VStack>

    )
}