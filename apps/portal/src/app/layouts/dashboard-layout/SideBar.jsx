// src/layouts/dashboard-layout/SideBar.jsx
import { useTheme, useMediaQuery, Box, Drawer } from "@mui/material";
import { LAYOUT_CONFIG } from "./configs/config";
import ToggleSidebarCollapsedButton from "./components/ToggleSidebarCollapsedButton";
import Brand from "@portal/app/components/brand/Brand";
import MenuList from "./components/MenuList";

const SideBar = ({ isSidebarCollapsed, drawerWidth, collapsedDrawerWidth, toggleCollapsedDrawer, isOpenOnMobile, toggleMobileDrawer }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            open={isOpenOnMobile}
            onClose={toggleMobileDrawer}
            variant={isMobile ? 'temporary' : 'permanent'}
            anchor='left'
            hideBackdrop={!isMobile}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                position: 'relative',
                '& .MuiDrawer-paper': {
                    width: isSidebarCollapsed ? `${collapsedDrawerWidth}px` : `${drawerWidth}px`,
                    transitionProperty: 'width',
                    transitionDuration: LAYOUT_CONFIG.layoutTransitionDuration,
                    transitionTimingFunction: 'ease',
                    overflowX: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                    //backgroundColor: 'rgba(254,254,254,0.35)', //Descomentar para debugs
                    '&::-webkit-scrollbar': { display: 'none' }
                },
            }}
        >

            {/*Mostra o botão de collapse apenas no caso de não ser um dispositivo mobile*/}
            {!isMobile && <ToggleSidebarCollapsedButton toggleCollapsedDrawer={toggleCollapsedDrawer} isSidebarCollapsed={isSidebarCollapsed} />}

            <Box display='flex' flexDirection='column'>

                {/** Brand */}
                <Box p={2}>
                    <Brand src={isSidebarCollapsed ? "/brand/symbol-red.svg" : "/brand/logo-dk.svg"} height={54} />
                </Box>

                <Box flexGrow={1} mb={2} sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    <MenuList sidebarCollapsed={isSidebarCollapsed} />
                </Box>

            </Box>

        </Drawer>
    )

}

export default SideBar;