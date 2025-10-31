import { useState } from "react";
import { AppBar, Toolbar, Box, Container, IconButton, useTheme, useMediaQuery, Button } from "@mui/material";
import { NavLink } from "react-router";
import { MenuRounded, CalendarTodayRounded } from "@mui/icons-material";
import ColorModeSwitch from "@website/layout/ColorModeSwitch";
import NavbarMenu from "./NavbarMenu";
import DrawerMenu from "./DrawerMenu";
import { navigationMap } from "@website/app/config/navigationMap";
import { useAppThemeContext } from "@website/app/providers/AppThemeProvider";
import Brand from "@website/components/brand/Brand";
import { useScrolled } from "@uverest/shared/hooks";

const Header = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { resolvedMode } = useAppThemeContext();
    const scrolled = useScrolled(150);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    transition: `all ${theme.transitions.duration.standard} ease-in-out`,
                    backgroundColor: !scrolled ? 'transparent' : theme.palette.primary.dark,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", gap: 2 }}>

                        {/* Logo */}
                        <Box sx={{ display: "flex", flex: 1, alignItems: "center", py: 1 }}>
                            <Box
                                component={NavLink}
                                to="/"
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Brand height={isMobile ? 70 : 70} src={resolvedMode === 'light' ? "brand/logo-wt.png" : "brand/logo-wt.png"} />
                            </Box>
                        </Box>

                        {/* Menu desktop */}
                        {!isMobile && <NavbarMenu navItems={navigationMap.main} />}

                        {/** CTA Agendar consulta */}
                        {!isMobile && <Button variant="contained" color="secondary" endIcon={<CalendarTodayRounded />}>Orçamento</Button>}

                        {/* Switch e Drawer toggle */}
                        <ColorModeSwitch />
                        <IconButton edge="end" color="inherit" onClick={() => setIsOpenDrawer(true)}>
                            <MenuRounded />
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>

            {/** Drawer Menu */}
            <DrawerMenu open={isOpenDrawer} onClose={setIsOpenDrawer} brandType="image" navItems={navigationMap} />

        </>
    );
};

export default Header;
