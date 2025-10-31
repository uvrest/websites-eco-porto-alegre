import { Box } from "@mui/material";
import { env } from "@portal/app/config/env";

const Brand = ({ src = "/brand/logo-white.svg", height = 54, sx = {} }) => {
    return (
        <Box
            component="img"
            src={src}
            alt={env.VITE_APP_NAME ?? 'Uverest - Portal'}
            sx={{ height: height, maxWidth: "310px", ...sx }}
        />
    );
}

export default Brand;