import { useState } from "react";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Divider, Typography, ListItemIcon } from "@mui/material";
import { env } from "@portal/app/config/env";
import { Logout } from "@mui/icons-material";
import { LAYOUT_CONFIG } from "../configs/config";
import { useSnackbar } from "@uverest/design-system/contexts/SnackbarContext";
import { useAuthStore } from "@portal/domains/auth/store/useAuthStore";

const ProfileMenu = () => {

    const { showSnackbar } = useSnackbar();
    const { logout, user } = useAuthStore();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    // Toggle Menu
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        await logout();
        showSnackbar('Logout efetuado com sucesso', 'success');
    }

    return (
        <>
            {/* Profile button */}
            <Box display='flex' position='relative' alignItems='center' textAlign='center'>
                <Tooltip title="GerenciarPerfil">
                    <IconButton
                        onClick={handleOpen}
                        size="small"
                        aria-controls={isOpen ? 'profile-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isOpen ? 'true' : 'false'}
                    >
                        <Avatar
                            sx={{ width: LAYOUT_CONFIG.avatarSize, height: LAYOUT_CONFIG.avatarSize }}
                            src={`${env.VITE_STORAGE_URL}/${user.avatar}`}
                        />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Profile Menu */}
            <Menu
                open={isOpen}
                anchorEl={anchorEl}
                id="profile-menu"
                onClose={handleClose}
            >
                <MenuItem>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Avatar
                            src={`${env.VITE_STORAGE_URL}/${user.avatar}`}
                        />

                        <Box sx={{ ml: 1 }}>
                            <Typography variant="body1">{user.name}</Typography>
                            <Typography variant="body2">{user.email}</Typography>
                        </Box>
                        {/*<Chip label="Admin" color="secondary" size="small" style={{ marginLeft: 'auto' }} />*/}
                    </Box>
                </MenuItem>

                <Divider />

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Sair
                </MenuItem>

            </Menu>
        </>
    )
}

export default ProfileMenu;