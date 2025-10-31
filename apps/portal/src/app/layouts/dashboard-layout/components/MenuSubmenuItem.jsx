import { Link } from "react-router";
import { useTheme, ListItemButton, ListItemText } from "@mui/material";

const MenuSubmenuItem = ({ subItem, sidebarCollapsed, ...props }) => {

    const theme = useTheme();

    return (
        <ListItemButton
            LinkComponent={Link}
            to={!!subItem.path ? subItem.path : null}
            sx={{
                pl: sidebarCollapsed ? 0 : theme.spacing(6),
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: theme.spacing(3.5),
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    backgroundColor: theme.palette.primary.main,
                    display: 'block',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: theme.spacing(3.5),
                    top: '50%',
                    width: theme.spacing(2),
                    height: '1px',
                    backgroundColor: theme.palette.primary.main,
                    transform: 'translateY(-50%)',
                    display: 'block',
                },
            }}
            {...props}
        >
            <ListItemText
                primary={subItem.primaryLabel}
                secondary={subItem.secondaryLabel}
                slotProps={{
                    primary: {
                        color: 'primary',
                        sx: {
                            fontSize: sidebarCollapsed ? "0.85rem" : "0.95rem",
                            fontWeight: sidebarCollapsed ? "normal" : "bold",
                            textAlign: sidebarCollapsed ? "center" : "left",
                        },
                    },
                    secondary: {
                        sx: {
                            fontSize: sidebarCollapsed ? "0.75rem" : "0.85rem",
                            fontWeight: "normal",
                            textAlign: sidebarCollapsed ? "center" : "left",
                        },
                    },
                }}
            />
        </ListItemButton>
    );
}

export default MenuSubmenuItem;