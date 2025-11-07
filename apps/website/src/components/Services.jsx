import { Container, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

const ServiceItem = ({ image, title, description, action }) => {
    return (
        <Card
            sx={{
                height: "100%",
                transition: (theme) =>
                    theme.transitions.create(["box-shadow", "transform"], {
                        duration: theme.transitions.duration.short,
                    }),
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }}
        >
            <CardActionArea onClick={() => { action() }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={image}
                    alt={title}
                />
                <CardContent sx={{ p: 4 }}>
                    <Typography component="h3" variant="h5" color="primary" sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const Services = ({ items = [] }) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {items.map((service) => {
                    return (
                        <Grid key={service.id} size={{ xs: 12, md: 4 }}>
                            <ServiceItem image={service.image} title={service.title} description={service.description} action={service.action} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Services;