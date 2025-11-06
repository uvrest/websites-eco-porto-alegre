import { Box, Container, Typography, useTheme, alpha, Divider } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { useScrolled } from "@uverest/shared/hooks";

const Overlay = () => (
    <Box
        sx={(theme) => ({
            position: "absolute",
            inset: 0,
            zIndex: -1,
            backgroundColor: alpha(theme.palette.primary.dark, 0.95),
            mixBlendMode: "color", // deixa o overlay reagir às cores da mídia
        })}
    />
);

const PageHeader = ({ pageTitle, overline }) => {

    const theme = useTheme();
    const scrolled = useScrolled(200);

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 2,
                pt: !scrolled ? `calc(120px + ${theme.spacing(1)})` : `calc(120px - ${theme.spacing(1)})`,
                pb: 5,
            }}
        >
            <Overlay />
            <Container>
                <Divider sx={{ mb: 4 }} />
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="overline" color="secondary">{overline}</Typography>
                        <Typography variant="h1" color="primary.contrastText">{pageTitle}</Typography>
                    </Box>
                    <Breadcrumbs />
                </Box>
            </Container>
        </Box>
    )
}

export default PageHeader;