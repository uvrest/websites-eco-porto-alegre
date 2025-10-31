import { Box } from "@mui/material";
import { env } from "@website/app/config/env";

const ImageBrand = ({ src = "/brand/logo-dk.svg", height = 54, sx = {} }) => {
    return (
        <Box
            component="img"
            src={src}
            alt={env.VITE_APP_NAME}
            sx={{ height: height, maxWidth: "100%", ...sx }}
        />
    );
}

export default ImageBrand;