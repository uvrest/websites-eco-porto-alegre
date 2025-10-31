import { Grid, Box, Typography } from "@mui/material";

const AboutCard = ({ image, title, overline, children }) => {
    return (
        <Grid container spacing={4} alignItems='center'>

            <Grid size={{ xs: 12, md: 5 }} offset={{ md: 1 }}>
                {/* Foto */}
                <Box
                    component="img"
                    src={image}
                    alt={name}
                    sx={{
                        width: "100%",
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>

                {/* Texto */}
                <Box sx={{ flex: 1 }}>

                    <Typography variant="overline" color="primary">
                        {overline}
                    </Typography>

                    <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                        {title}
                    </Typography>

                    <Box>
                        {children}
                    </Box>
                </Box>
            </Grid>

        </Grid >
    );
};

export default AboutCard;
