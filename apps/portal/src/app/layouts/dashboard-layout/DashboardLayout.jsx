// src/layouts/dashboard-layout/DashboardLayout.jsx
import { useState, useCallback, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import TopBar from "./Topbar";
import SideBar from "./SideBar";
import { LAYOUT_CONFIG } from "./configs/config";
import { Outlet } from "react-router";

const DashboardLayout = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);

    // Captura o valor padrão de sidebar colapsado do LocalStorage
    const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('sidebarCollapsed')) ?? false;
        } catch {
            return false;
        }
    });

    // Alterna entre sidebar collapsed e expanded (apenas Desktop)
    const toggleCollapsedDrawer = () => {
        setSidebarCollapsed((prevState) => !prevState);
    };

    // Armazena no LocalStorage a preferência de modo de sidebar
    const setLocalStorageSidebarCollapsedMode = useCallback((sidebarCollapsed) => {
        localStorage.setItem('sidebarCollapsed', JSON.stringify(sidebarCollapsed));
    }, []);

    // Sincroniza o estado do sidebar collapsed com o LocalStorage
    useEffect(() => {
        setLocalStorageSidebarCollapsedMode(sidebarCollapsed);
    }, [sidebarCollapsed, setLocalStorageSidebarCollapsedMode]);

    //Switch entre open/close drawer (em dispositivos móveis apenas)
    const toggleMobileDrawer = () => {
        setIsOpenOnMobile((prevState) => !prevState);
    };

    // Get the AppBar height dynamically
    const appBarHeight = LAYOUT_CONFIG.getAppBarHeight(theme, isMobile);

    return (
        <>
            <TopBar
                appBarHeight={appBarHeight}
                //Usado para calcular dinamicamente a largura do TopBar
                isSidebarCollapsed={sidebarCollapsed}
                drawerWidth={LAYOUT_CONFIG.drawerWidth}
                collapsedDrawerWidth={LAYOUT_CONFIG.collapsedDrawerWidth}
                toggleMobileDrawer={toggleMobileDrawer}
            />

            <SideBar
                isSidebarCollapsed={sidebarCollapsed}
                drawerWidth={LAYOUT_CONFIG.drawerWidth}
                collapsedDrawerWidth={LAYOUT_CONFIG.collapsedDrawerWidth}
                toggleCollapsedDrawer={toggleCollapsedDrawer}
                isOpenOnMobile={isOpenOnMobile}
                toggleMobileDrawer={toggleMobileDrawer}
            />

            <Box
                mt={appBarHeight}
                ml={
                    isMobile
                        ? 0
                        : sidebarCollapsed
                            ? `${LAYOUT_CONFIG.collapsedDrawerWidth}px`
                            : `${LAYOUT_CONFIG.drawerWidth}px`
                }
                p={3}
                sx={{
                    transitionProperty: 'all',
                    transitionDuration: LAYOUT_CONFIG.layoutTransitionDuration,
                    transitionTimingFunction: 'ease',
                }}
            >
                <Outlet />
            </Box>
        </>
    )
}

export default DashboardLayout;