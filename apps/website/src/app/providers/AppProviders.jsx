import { useEffect } from "react";
import { AppThemeProvider } from "./AppThemeProvider";
import { BrowserRouter } from "react-router";
import { env } from "@website/app/config/env";
import { useScrollRestoration } from "@uverest/shared/hooks/useScrollRestoration";

// SnackbarProvider, SWRConfig, ErrorBoundary, etc...
export const AppProviders = ({ children }) => {

    useEffect(() => {
        document.title = env.VITE_APP_NAME;
    }, []);

    return (
        <AppThemeProvider>
            <BrowserRouter basename={env.VITE_BASE_PATH}>
                <ScrollRestorationWrapper>
                    {children}
                </ScrollRestorationWrapper>
            </BrowserRouter>
        </AppThemeProvider>
    );
}

function ScrollRestorationWrapper({ children }) {
    useScrollRestoration(); // agora dentro do Router
    return children;
}