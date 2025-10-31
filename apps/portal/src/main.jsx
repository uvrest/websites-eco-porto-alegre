import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthRouter from "./app/router/AuthRouter";
import { BrowserRouter } from "react-router";
import { env } from "./app/config/env";

//React Application Entrypoint
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={env.VITE_BASE_PATH ?? '/'}>
            <AuthRouter />
        </BrowserRouter>
    </StrictMode>
)