import { useEffect } from "react";
import { AppThemeProvider } from "./AppThemeContext";
import SnackbarProvider from "@uverest/design-system/contexts/SnackbarContext";
import { env } from "@portal/app/config/env";
import { useScrollRestoration } from "@uverest/shared/hooks";

// SnackbarProvider, SWRConfig, ErrorBoundary, etc...
const AppProviders = ({ children }) => {

    // Change the document title (a.k.a. browser tab title)
    useEffect(() => {
        document.title = env?.VITE_APP_NAME || "Portal";
    }, []);

    return (
        <AppThemeProvider>
            <SnackbarProvider>
                <ScrollRestorationWrapper>
                    {children}
                </ScrollRestorationWrapper>
            </SnackbarProvider>
        </AppThemeProvider>
    )
}

// Reset scroll position to top when route changes
function ScrollRestorationWrapper({ children }) {
    useScrollRestoration();
    return children;
}

export default AppProviders;