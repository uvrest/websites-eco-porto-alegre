// src/layouts/dashboard-layout/components/ToggleMenuButton.jsx
import { IconButton } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const ToggleMenuButton = ({ toggleDrawer }) => {
    return (
        <IconButton
            sx={{ color: '#fff' }}
            onClick={toggleDrawer}
        >
            <MenuOutlined />
        </IconButton>
    )
}

export default ToggleMenuButton;