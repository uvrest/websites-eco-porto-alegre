import { Container, Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const FeatureItem = ({ description, Icon }) => {
    return (
        <Box
            display='flex'
            sx={{
                background: 'transparent',
                height: '100%',
                alignItems: 'center',
                gap: 2,
                px: 1,
                py: 2,
            }}>
            <Box>
                {<Icon fontSize="large" color="primary" aria-hidden />}
            </Box>
            <Typography component='span' color={grey[200]}>{description}</Typography>
        </Box>
    )
}

const Features = ({ items = [] }) => {
    return (
        <Box sx={{ backgroundColor: 'common.black', }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {items.map((feature) => (
                        <Grid size={{ xs: 12, md: 3 }} key={feature.id}>
                            <FeatureItem {...feature} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Features;