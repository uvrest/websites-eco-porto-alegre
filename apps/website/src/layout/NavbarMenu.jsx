// website/src/layout/NavbarMenu.jsx
import { useState } from "react";
import { Box, Stack, Button, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import NavigationMenu from "@uverest/design-system/molecules/NavigationMenu";
import { Link as RouterLink } from "react-router";

const NavigationButton = ({
    label,
    href,
    onClick,
    isActive,
    Component,
    submenu,
    ...rest
}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    // se tiver submenu, o click abre menu; senão, segue comportamento normal
    const handleClick = submenu ? handleOpen : onClick;
    const hasSubmenu = Array.isArray(submenu) && submenu.length > 0;

    return (
        <>
            <Button
                component={Component}
                href={!hasSubmenu ? href : undefined} // usado em mailto/tel/http
                to={!hasSubmenu ? href : undefined}   // usado em react-router
                onClick={handleClick}
                className={isActive ? "active" : ""}
                sx={(theme) => ({
                    position: "relative",
                    fontWeight: 500,
                    fontSize: { xs: "1rem", md: "1rem" },
                    opacity: 0.72,
                    color: theme.palette.primary.contrastText,
                    textTransform: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    letterSpacing: "normal",
                    px: 0.8,
                    "&.active": {
                        opacity: 1,
                        color: theme.palette.secondary.main,
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            display: "block",
                            width: "100%",
                            height: 2,
                            bottom: 0,
                            left: 0,
                            bgcolor: theme.palette.secondary.main,
                        },
                    },
                    "&:hover": {
                        opacity: 1,
                        color: theme.palette.secondary.main,
                    },
                })}
                {...rest}
            >
                <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.3 }}>
                    {label}
                    {hasSubmenu && (
                        <KeyboardArrowDownRounded
                            sx={{
                                fontSize: 18,
                                opacity: 0.6,
                                transition: "transform 0.2s ease",
                                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                        />
                    )}
                </Box>
            </Button>

            {hasSubmenu && (
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{ dense: false }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    {submenu.map((item) => (
                        <MenuItem
                            key={item.to}
                            component={RouterLink}
                            to={`/${item.to}`}
                            onClick={handleClose}
                            sx={{
                                minWidth: 180,
                            }}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}

        </>
    );
};

const NavbarMenu = ({ navItems }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <NavigationMenu
                items={navItems}
                renderButton={({ label, to, href, isActive, handleClick, Component, submenu }) => (
                    <Box key={to} display="flex">
                        <NavigationButton
                            Component={Component}
                            label={label}
                            href={href}
                            isActive={isActive}
                            onClick={handleClick}
                            submenu={submenu}
                        />
                    </Box>
                )}
            />
        </Stack>
    );
};

export default NavbarMenu;