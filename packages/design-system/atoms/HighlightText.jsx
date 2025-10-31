import { Typography } from "@mui/material";

const HighlightText = ({ children, color = "primary.main", sx }) => {
    return (
        <Typography
            component="span"
            sx={{ color, fontWeight: "bold", ...sx }}
        >
            {children}
        </Typography>
    );
};

export default HighlightText;