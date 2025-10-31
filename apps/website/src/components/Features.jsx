import { Container, Grid, Box, Stack, Typography } from "@mui/material";

const FeatureItem = ({ title, description, Icon }) => {
    return (
        <Stack
            spacing={0}
            sx={(theme) => ({
                position: "relative",
                backgroundColor: theme.palette.background.paper,
                opacity: 1,
                height: '100%',
                p: 5,
                top: "-25px",
                zIndex: 2,
                borderRadius: 1,
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.056)",
                transition: "all 300ms ease-in-out",
                "&:hover": {
                    transform: "translateX(0px) translateY(-10px)",
                    boxShadow: "0 0 20px 10px rgba(0,0,0,0.1)",
                }
            })}>
            <Box>
                {<Icon fontSize="large" color="primary" aria-hidden />}
            </Box>
            <Typography variant="h5" component="h4" mb={1}>{title}</Typography>
            <Typography color="text.secondary" variant="body2" component='span'>{description}</Typography>
        </Stack>
    )
}

const Features = ({ items = [] }) => {
    return (
        <Box>
            <Container maxWidth="lg">
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