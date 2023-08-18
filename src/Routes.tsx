import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from './pages/Login/index';
import { Register } from './pages/Register';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Route>
            <Route path="/logged" element={<AuthLayout />}>
                <Route path="/logged" element={<Login />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}