import { Container, Grid, Box, Typography } from "@mui/material";

const FeatureItem = ({ description, Icon }) => {
    return (
        <Box
            display='flex'
            sx={{
                background: "#F9F9F9",
                height: '100%',
                alignItems: 'center',
                gap: 2,
                px: 1,
                py: 2,
            }}>
            <Box>
                {<Icon fontSize="large" color="primary" aria-hidden />}
            </Box>
            <Typography component='span'>{description}</Typography>
        </Box>
    )
}

const Features = ({ items = [] }) => {
    return (
        <Box sx={{ backgroundColor: 'common.black', }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {items.map((feature) => (
                        <Grid size={{ xs: 12, md: 4 }} key={feature.id}>
                            <FeatureItem {...feature} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Features;