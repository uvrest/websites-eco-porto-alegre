import { AppBar, Toolbar, Stack, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import { LAYOUT_CONFIG } from "./configs/config";
import { getTopBarWidth } from "./helpers";
import ToggleMenuButton from "./components/ToggleMenuButton";
import SwitchThemeButton from "./components/SwitchThemeButton";
import ProfileMenu from "./components/ProfileMenu";

//Apenas para exemplo do tema
//const pages = ['Mega Menu', 'Nested Menu', 'Configurações'];
const pages = [];

const TopBar = ({ appBarHeight, isSidebarCollapsed, drawerWidth, collapsedDrawerWidth, toggleMobileDrawer }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar
            position="fixed"
            elevation={0}
            enableColorOnDark
            sx={{
                height: appBarHeight,
                width: getTopBarWidth(isMobile, isSidebarCollapsed, drawerWidth, collapsedDrawerWidth),
                transitionProperty: 'all',
                transitionDuration: LAYOUT_CONFIG.layoutTransitionDuration,
                transitionTimingFunction: 'ease',
                justifyContent: 'center', //Axis invertida (funciona como um align-items)
            }}
        >
            <Toolbar>

                {isMobile && <ToggleMenuButton toggleDrawer={toggleMobileDrawer} />}

                {!isMobile && (
                    <Box>
                        <Stack direction='row' spacing={0.5}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => { return; }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Stack>
                    </Box>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginLeft: 'auto', gap: 1 }}>
                    <SwitchThemeButton />
                    <ProfileMenu />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;