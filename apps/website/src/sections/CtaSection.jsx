import { Box, Container, Typography } from "@mui/material";
import CtaButton from "@uverest/design-system/atoms/CtaButton";

const CtaSection = () => {
    return (
        <Box
            id="cta"
            sx={{
                position: "relative",
                backgroundColor: "common.black",
                color: "common.white",
                py: { xs: 8, md: 12 },
                textAlign: "center",
                overflow: "hidden",
                backgroundImage: "url(/placeholders/1360x650.png)",
                backgroundAttachment: "fixed",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
            }}
        >
            {/* overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.85)",
                    zIndex: 0,
                }}
            />

            {/* conteúdo */}
            <Container
                maxWidth="md"
                sx={{ position: "relative", zIndex: 1 }}
            >
                <Typography
                    variant="overline"
                    sx={{ color: "primary.main", fontWeight: 600 }}
                >
                    Presencial ou Online
                </Typography>

                <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>
                    Agende uma consulta
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ mb: 4, maxWidth: 700, mx: "auto", opacity: 0.9 }}
                >
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
                </Typography>

                <CtaButton
                    label="Agende uma consulta hoje mesmo"
                    href="https://wa.me/5551999999999"
                    target="_blank"
                    color="primary"
                    size="large"
                />
            </Container>
        </Box>
    );
};

export default CtaSection;
