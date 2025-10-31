// portal/src/contexts/AppThemeContext.jsx
import { createContext, useContext, useMemo } from "react";
import { CssBaseline, createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import getThemeOptions, { themeConfig } from "@uverest/themes/default";
import { useColorMode } from "@uverest/shared/hooks";

const AppThemeContext = createContext(null);

export const AppThemeProvider = ({ children }) => {

    const { selectedMode, resolvedMode, toggleColorMode } = useColorMode();

    // garante que o modo esteja dentro dos suportados pelo tema
    const sanitizedMode = themeConfig.supportedModes.includes(resolvedMode)
        ? resolvedMode
        : themeConfig.defaultMode;

    const theme = useMemo(
        () => createTheme(getThemeOptions(sanitizedMode)),
        [sanitizedMode]
    );

    // se o tema não permite toggle de tema → ignora função
    const toggleColor = themeConfig.allowUserToggle ? toggleColorMode : undefined;

    const value = {
        selectedMode,
        resolvedMode: sanitizedMode,
        toggleColorMode: toggleColor,
        config: themeConfig,
    };

    return (
        <AppThemeContext.Provider value={value}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppThemeContext.Provider>
    );
}

export const useAppThemeContext = () => useContext(AppThemeContext);