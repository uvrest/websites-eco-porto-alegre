import { createContext, useContext, useEffect, useMemo } from 'react';
import { CssBaseline, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import getThemeOptions, { themeConfig } from "@uverest/themes/default/index";
import { useColorMode } from '@uverest/shared/hooks/useColorMode';

const AppThemeContext = createContext(null);

export function AppThemeProvider({ children }) {

    const { selectedMode, resolvedMode, toggleColorMode } = useColorMode();

    // garante que o modo esteja dentro dos suportados pelo tema
    const safeMode = themeConfig.supportedModes.includes(resolvedMode)
        ? resolvedMode
        : themeConfig.defaultMode;

    const theme = useMemo(
        () => createTheme(getThemeOptions(safeMode)),
        [safeMode]
    );

    // se o tema não permite toggle → ignora função
    const toggle = themeConfig.allowUserToggle ? toggleColorMode : () => { };

    const value = {
        selectedMode,
        resolvedMode: safeMode,
        toggleColorMode: toggle,
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
