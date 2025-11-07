import { useState } from "react";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Collapse, Button, Divider } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { WhatsApp } from "@mui/icons-material";
import NavigationMenu from "@uverest/design-system/molecules/NavigationMenu";
import Brand from "@website/components/brand/Brand";
import { useAppThemeContext } from "@website/app/providers/AppThemeProvider";
import { whatsappOpenAction } from "@website/app/config/contactInfo";

const DrawerMenu = ({ open, onClose, navItems, anchor = "right" }) => {

    const { resolvedMode } = useAppThemeContext();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleToggle = (label) => {
        setOpenSubmenu((prev) => (prev === label ? null : label));
    };

    return (
        <Drawer anchor={anchor} open={open} onClose={() => onClose(false)}>
            <Box sx={{ width: 280, display: "flex", flexDirection: "column", height: "100%" }}>

                {/* Logo dentro do Drawer */}
                <Box sx={{ p: 2 }}>
                    <Box
                        component="a"
                        href="/"
                        onClick={() => onClose(false)}
                        style={{ textDecoration: "none" }}
                    >
                        <Brand height={60} src={resolvedMode === 'light' ? "brand/logo-bk.png" : "brand/logo-wt.png"} />
                    </Box>
                </Box>

                {/* Links */}
                <Box sx={{ flex: 1 }}>
                    <List disablePadding>
                        <NavigationMenu
                            items={navItems.main}
                            offset={80}
                            renderButton={({
                                label,
                                href,
                                handleClick,
                                Component,
                                submenu,
                                className,
                            }) => {
                                const hasSubmenu = Array.isArray(submenu) && submenu.length > 0;
                                const isOpen = openSubmenu === label;

                                return (
                                    <Box key={href}>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                component={hasSubmenu ? "button" : Component}
                                                href={!hasSubmenu ? href : undefined}
                                                to={!hasSubmenu ? href : undefined}
                                                className={className}
                                                onClick={(e) => {
                                                    if (hasSubmenu) handleToggle(label);
                                                    else {
                                                        handleClick(e);
                                                        onClose(false);
                                                    }
                                                }}
                                                sx={(theme) => ({
                                                    "&:hover": {
                                                        bgcolor: theme.palette.action.hover,
                                                    },
                                                    "&.active": {
                                                        opacity: 1,
                                                        color: theme.palette.primary.main,
                                                    },
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    pr: 2,
                                                })}
                                            >
                                                <ListItemText primary={label} />
                                                {hasSubmenu && (
                                                    <KeyboardArrowDownRounded
                                                        sx={{
                                                            fontSize: 20,
                                                            opacity: 0.6,
                                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                            transition: "transform 0.2s ease",
                                                        }}
                                                    />
                                                )}
                                            </ListItemButton>
                                        </ListItem>

                                        {hasSubmenu && (
                                            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {submenu.map((item) => (
                                                        <ListItemButton
                                                            key={item.to}
                                                            component={RouterLink}
                                                            to={`/${item.to}`}
                                                            onClick={() => onClose(false)}
                                                            sx={{
                                                                pl: 4,
                                                                py: 0.8,
                                                                "&:hover": {
                                                                    bgcolor: "action.hover",
                                                                },
                                                            }}
                                                        >
                                                            <ListItemText primary={item.label} />
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        )}

                                        <Divider sx={{ my: 0.5, opacity: 0.2 }} />
                                    </Box>
                                );
                            }}
                        />
                    </List>
                </Box>

                <Divider />

                {/* CTA opcional */}
                <Box sx={{ p: 2, textAlign: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<WhatsApp />}
                        fullWidth
                        onClick={whatsappOpenAction}
                    >
                        Orçamento
                    </Button>
                </Box>

                {/* Menu legal horizontal 
                {navItems.legal.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            p: 2,
                            flexWrap: "wrap",
                        }}
                    >
                        <NavigationMenu
                            items={navItems.legal}
                            renderButton={({ label, to, handleClick }) => (
                                <Button
                                    key={to}
                                    onClick={(e) => {
                                        handleClick(e);
                                        onClose(false);
                                    }}
                                    size="small"
                                    variant="text"
                                    sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                                >
                                    {label}
                                </Button>
                            )}
                        />
                    </Box>
                )}
                */}

            </Box>
        </Drawer>
    );
};

export default DrawerMenu;