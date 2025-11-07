import { useState } from "react";
import { AppBar, Toolbar, Box, Container, IconButton, useTheme, useMediaQuery, Button, alpha } from "@mui/material";
import { NavLink } from "react-router";
import { MenuRounded, CalendarTodayRounded } from "@mui/icons-material";
import ColorModeSwitch from "@website/layout/ColorModeSwitch";
import NavbarMenu from "./NavbarMenu";
import DrawerMenu from "./DrawerMenu";
import { navigationMap } from "@website/app/config/navigationMap";
import { useAppThemeContext } from "@website/app/providers/AppThemeProvider";
import Brand from "@website/components/brand/Brand";
import { useScrolled } from "@uverest/shared/hooks";
import { whatsappOpenAction } from "@website/app/config/contactInfo";
import logoWt from "@website/assets/images/logo-wt.png";

const Header = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { resolvedMode } = useAppThemeContext();
    const scrolled = useScrolled(200);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: (theme) =>
                        !scrolled
                            ? alpha(theme.palette.primary.dark, 0) // totalmente transparente no topo
                            : alpha(theme.palette.primary.dark, 0.85), // leve transparência quando rola
                    backdropFilter: scrolled ? "blur(10px)" : "none", // blur suave ao rolar
                    WebkitBackdropFilter: scrolled ? "blur(10px)" : "none", // compatibilidade Safari
                    boxShadow: scrolled ? theme.shadows[3] : "none",
                    py: !scrolled ? 2 : 0.5,
                    transition:
                        "background-color 0.4s ease, backdrop-filter 0.4s ease, padding 0.3s ease",
                    height: !scrolled ? 120 : `calc(120 - ${theme.spacing(1)})`,
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
                                <Brand height={isMobile ? 58 : 70} src={resolvedMode === 'light' ? logoWt : logoWt} />
                            </Box>
                        </Box>

                        {/* Menu desktop */}
                        {!isMobile && <NavbarMenu navItems={navigationMap.main} />}

                        {/** CTA Agendar consulta */}
                        {!isMobile && <Button variant="contained" color="secondary" endIcon={<CalendarTodayRounded />} onClick={whatsappOpenAction}>Orçamento</Button>}

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
