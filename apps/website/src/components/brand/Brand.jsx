import { Box } from "@mui/material";
import { env } from "@website/app/config/env";

const Brand = ({ src = "brand/logo-default.png", height = 54, sx = {} }) => {
    return (
        <Box
            component="img"
            src={src}
            alt={env.VITE_APP_NAME}
            sx={{ height: height, ...sx }}
        />
    );
}

export default Brand;