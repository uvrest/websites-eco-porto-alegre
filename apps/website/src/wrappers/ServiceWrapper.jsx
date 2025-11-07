import { Box, Grid } from "@mui/material";

const ServiceWrapper = ({ children }) => {
    return (
        <Box>
            <Grid container>
                <Grid size={{ xs: 12, md: 3 }}>

                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServiceWrapper;