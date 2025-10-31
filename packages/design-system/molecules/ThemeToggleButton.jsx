import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggleButton = ({
    mode = "light",
    onToggle,
    label = "Alternar tema",
    size = "medium",
    edge = false,
    withTooltip = true,
}) => {

    const button = (
        <IconButton onClick={onToggle} aria-label={label} size={size} edge={edge ? "end" : false}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );

    return withTooltip ? <Tooltip title={label}>{button}</Tooltip> : button;
};

export default ThemeToggleButton;
