import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import App from "@portal/App";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useAuthStore } from "@portal/domains/auth/store/useAuthStore";

// This router handles the main routing logic of the portal.
// It decides which set of routes (public AuthRoutes or private PortalRoutes)
// should be rendered based on the authentication state (token presence).
const AuthRouter = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        if (isAuthenticated && location.pathname.startsWith("/auth")) {
            navigate("/portal", { replace: true });
        } else if (!isAuthenticated && location.pathname.startsWith("/portal")) {
            navigate("/auth", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <Routes>
            <Route element={<App />}>
                {isAuthenticated ? (
                    <>
                        <Route path="portal/*" element={<PrivateRoutes />} />
                        <Route path="*" element={<Navigate to="/portal" replace />} />
                    </>
                ) : (
                    <>
                        <Route path="auth/*" element={<AuthRoutes />} />
                        <Route path="*" element={<Navigate to="/auth" replace />} />
                    </>
                )}
            </Route>
        </Routes>
    )
}

export default AuthRouter;