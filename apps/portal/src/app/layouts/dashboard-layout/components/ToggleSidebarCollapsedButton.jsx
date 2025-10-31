// src/layouts/dashboard-layout/components/ToggleSidebarCollapsedButton.jsx
import { IconButton } from "@mui/material";
import { ChevronLeftOutlined } from "@mui/icons-material";

const ToggleSidebarCollapsedButton = ({ toggleCollapsedDrawer, isSidebarCollapsed }) => {
    return (
        <IconButton
            onClick={toggleCollapsedDrawer}
            sx={{
                position: 'absolute',
                right: 0,
                top: 21,
            }}
        >
            <ChevronLeftOutlined
                sx={{
                    transform: isSidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            />
        </IconButton>
    );
}

export default ToggleSidebarCollapsedButton;