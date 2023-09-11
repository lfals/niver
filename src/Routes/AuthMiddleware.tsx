import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";

interface AuthMiddlewareProps {
    children: ReactNode;
}
export function AuthMiddleware({ children }: AuthMiddlewareProps) {
    const [user] = useLocalStorage('user');

    return (
        <>
            {user?.access_token ? children : <Navigate to="/auth/login" />}
        </>
    )
}

export function LoggedMiddleware({ children }: AuthMiddlewareProps) {
    const [user] = useLocalStorage('user');

    return (
        <>
            {!user?.access_token ? children : <Navigate to="/logged" />}
        </>
    )
}