import { Box, Typography } from "@mui/material";

const SectionTitle = ({
    title,
    subtitle,
    description,
    variant = "h2",
    align = 'center',
    color = 'textPrimary',
    supportColor = 'primary.main',
    sx = {}
}) => {
    return (
        <Box sx={{ textAlign: align, mb: 5, ...sx }}>

            {/** Overline */}
            {subtitle && (
                <Typography
                    variant="overline"
                    color={!!supportColor ? supportColor : 'textPrimary'}
                    sx={{ display: "block", mb: 1, fontSize: "0.85rem", fontWeight: 500, lineHeight: { xs: "inherit", md: "inherit" } }}
                >
                    {subtitle}
                </Typography>
            )}

            {/** MainTitle */}
            <Typography
                variant={variant}
                component="h2"
                sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: color,
                }}
            >
                {title}
            </Typography>

            {/** Description */}
            {description && (
                <Typography
                    variant="body1"
                    color={!!supportColor ? supportColor : 'textPrimary'}
                    sx={{ display: "block", mb: 0, }}
                >
                    {description}
                </Typography>
            )}

        </Box>
    )
}

export default SectionTitle;