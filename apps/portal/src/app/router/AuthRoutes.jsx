import { Routes, Route } from "react-router";
import AuthLayout from "@portal/app/layouts/auth-layout/AuthLayout";
import LoginPage from "@portal/domains/auth/pages/LoginPage";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<AuthLayout />}>
                <Route index element={<LoginPage />} />
                <Route path="recuperar-senha" element={<>Forgot Password Page</>} />
                <Route path="cadastro" element={<>Register Page</>} />
                <Route path='*' element={<>Not Found Page</>} />
            </Route>
        </Routes>
    )
}

export default AuthRoutes;
