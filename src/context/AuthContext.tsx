import { createContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../utils/axios';
import { useToasts } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useStorage';

interface User {
    name: string,
    email: string,
    avatar?: string,
    created_at: string,
}

interface AuthContextData {
    user: User,
    updateUserData: (user: User) => void,
    onSignUp: (name: string, email: string, password: string) => Promise<void>,
    onLogin: (email: string, password: string) => Promise<void>,
    onLogout: () => void,
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [storageUser, setStorageUser] = useLocalStorage('user');

    const { successToast, errorToast } = useToasts();
    const navigate = useNavigate();

    function updateUserData(user: User) {
        setUser(user);
    }

    async function onSignUp(name: string, email: string, password: string) {
        try {
            const response = await api.post('auth/register', {
                name,
                email,
                password
            });
            setStorageUser(response.data);
            updateUserData(response.data);
            successToast("Cadastro", "Cadastro realizado com sucesso");
            navigate('/logged');
        } catch (error: any) {
            if (error?.response?.data) {
                errorToast("Erro ao fazer cadastro", error?.response?.data);
            } else {
                errorToast("Erro ao fazer cadastro", "Ocorreu um erro ao fazer cadastro");
            }
        }
    }

    async function onLogin(email: string, password: string) {
        try {
            const response = await api.post('auth/login', {
                email,
                password
            });
            setStorageUser(response.data);
            updateUserData(response.data);
            successToast("Login", "Login realizado com sucesso");
            navigate('/logged');
        } catch (error: any) {
            if (error?.response?.data) {
                errorToast("Erro ao fazer login", error?.response?.data);
            } else {
                errorToast("Erro ao fazer login", "Ocorreu um erro ao fazer login");
            }
        }
    }

    function onLogout() {
        setUser({} as User);
        setStorageUser('');
    }

    useEffect(() => {
        if (storageUser?.token) {
            updateUserData(storageUser);
        }
    }, [])

    return (
        <AuthContext.Provider value={
            {
                user,
                updateUserData,
                onSignUp,
                onLogin,
                onLogout
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

