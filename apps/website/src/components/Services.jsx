import { Container, Box, Grid, Paper, Typography } from "@mui/material";

const ServiceItem = ({ iconImage, title, description }) => {
    return (
        <Paper
            sx={{
                p: 4,
                height: "100%",
                transition: (theme) =>
                    theme.transitions.create(["box-shadow", "transform"], {
                        duration: theme.transitions.duration.short,
                    }),
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
                "& .icon-circle": {
                    width: 50,
                    height: 50,
                    backgroundColor: "primary.main",
                    position: "absolute",
                    left: -15,
                    top: -15,
                    zIndex: 0,
                    borderRadius: "50%",
                    transition: (theme) =>
                        theme.transitions.create("transform", {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut,
                        }),
                },
                "&:hover .icon-circle": {
                    transform: "scale(1.2)",
                },
            }}
        >
            <Box sx={{ position: "relative" }}>
                <Box className="icon-circle" />
                <Box
                    component="img"
                    src={iconImage}
                    height={54}
                    sx={{ position: "relative", zIndex: 1 }}
                />
            </Box>

            <Typography component="h3" variant="h5" color="primary" sx={{ mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Paper>
    )
}

const Services = ({ items = [] }) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                {items.map((service) => {
                    return (
                        <Grid key={service.id} size={{ xs: 12, md: 4 }}>
                            <ServiceItem iconImage={service.iconImage} title={service.title} description={service.description} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Services;