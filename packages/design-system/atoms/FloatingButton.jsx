import { Fab } from "@mui/material";

/**
 * FloatingButton - Botão flutuante genérico
 */
const FloatingButton = ({
    position = "right",
    bottom = 24,
    offset = 24,
    icon,
    color = "primary",
    sx = {},
    ...props
}) => {
    return (
        <Fab
            color={color}
            sx={{
                position: "fixed",
                bottom,
                [position]: offset,
                zIndex: (theme) => theme.zIndex.fab || 1200,
                ...sx,
            }}
            {...props}
        >
            {icon}
        </Fab>
    );
};

export default FloatingButton;
