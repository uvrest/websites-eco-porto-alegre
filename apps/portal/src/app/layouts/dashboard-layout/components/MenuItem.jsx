import { useState } from "react";
import { Link } from "react-router";
import { ListItemButton, ListItemIcon, ListItemText, Tooltip, Collapse, Menu, MenuItem as MuiMenuItem } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import MenuSubmenuItem from "./MenuSubmenuItem";

const MenuItem = ({ item, sidebarCollapsed, ...props }) => {

    const [openItems, setOpenItems] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);

    const toggleCollapse = (label, event) => {
        if (sidebarCollapsed) {
            setAnchorEl(event.currentTarget);
            setOpenMenu(label);
        } else {
            setOpenItems((prev) => ({
                ...prev,
                [label]: !prev[label],
            }));
        }
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };

    const isItemOpened = !!openItems[item.primaryLabel];
    const isMenuOpened = openMenu === item.primaryLabel;

    return (
        <>
            <ListItemButton
                LinkComponent={Link}
                to={!!item.path ? item.path : null}
                onClick={(event) =>
                    item.subItems && toggleCollapse(item.primaryLabel, event)
                }
                sx={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    flexDirection: sidebarCollapsed ? "column" : "row",
                    alignItems: "center",
                }}
                {...props}
            >

                {/*
                * Item Icon
                * Mostra a label num tooltip quando o sidebar está colapsado 
                */}
                <Tooltip title={sidebarCollapsed ? item.primaryLabel : ""} placement="right">
                    <ListItemIcon
                        sx={{
                            //Utilizamos minWidth pois é a forma que o MUI utiliza para espaçar ListItemIcon de ListItemText
                            minWidth: sidebarCollapsed ? 0 : 40,
                            '& .MuiSvgIcon-root': {
                                fontSize: sidebarCollapsed ? 30 : 24,
                            },
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                </Tooltip>


                {/* 
                    Label do item
                    Mostra secondary apenas se o sidebar NÃO estiver colapsado 
                */}
                <ListItemText
                    primary={item.primaryLabel}
                    secondary={item.secondaryLabel}
                    slotProps={{
                        primary: {
                            sx: {
                                fontSize: sidebarCollapsed ? "0.8rem" : "1rem",
                                textAlign: sidebarCollapsed ? 'center' : 'left',
                            },
                        },
                        secondary: {
                            sx: {
                                display: sidebarCollapsed ? 'none' : 'inherit',
                            },
                        },
                    }}
                />

                {/* Se possui sub-itens, mostramos o ícone de expandir */}
                {!!item.subItems && (
                    <ExpandMore
                        sx={{
                            position: sidebarCollapsed ? 'absolute' : 'relative',
                            top: sidebarCollapsed ? '50%' : 'inherit',
                            right: sidebarCollapsed ? '0' : 'inherit',
                            transform: `translateY(${sidebarCollapsed ? "-50%" : "0"}) rotate(${sidebarCollapsed
                                ? isMenuOpened
                                    ? "90deg"
                                    : "270deg"
                                : isItemOpened
                                    ? "180deg"
                                    : "0deg"
                                })`,
                            transition: "transform 0.2s ease-in-out",
                        }}
                    />
                )}
            </ListItemButton>

            {/* Modo expandido: Collapse */}
            {!sidebarCollapsed && (
                <Collapse in={isItemOpened} timeout="auto" unmountOnExit>
                    {item.subItems?.map((subItem, subIndex) => (
                        <MenuSubmenuItem key={subIndex} subItem={subItem} sidebarCollapsed={sidebarCollapsed} />
                    ))}
                </Collapse>
            )}

            {/* Se sidebarCollapsed for true, usamos Menu (DropRight) */}
            {sidebarCollapsed && (
                <Menu
                    anchorEl={anchorEl}
                    open={isMenuOpened}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    disableAutoFocusItem
                >
                    {item.subItems?.map((subItem, subIndex) => (
                        <MuiMenuItem key={subIndex} onClick={handleCloseMenu}>
                            {subItem.primaryLabel}
                        </MuiMenuItem>
                    ))}
                </Menu>
            )}
        </>
    )

}

export default MenuItem;