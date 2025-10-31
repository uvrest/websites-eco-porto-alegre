import { Container, Box, Typography, Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import AboutCard from "@website/components/AboutCard";
import { socialData } from "@website/app/config/contactInfo";

const AboutContent = () => {
    return (
        <Box>
            <Typography component="p" variant="body1" sx={{ mb: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>

            <Typography
                variant="body2"
                sx={{ mb: 2, fontStyle: "italic", color: "text.secondary" }}
            >
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            </Typography>

            <Typography variant="subtitle2" color="primary.main" sx={{ mb: 3 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>

            <Button
                component="a"
                href={socialData.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Instagram />}
                variant="contained"
                sx={{
                    background: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)",
                }}
            >
                Me siga no Instagram
            </Button>
        </Box>
    )
}

const AboutSection = () => {
    return (
        <Box id="sobre" sx={{ py: 6, backgroundColor: "background.paper" }}>
            <Container maxWidth="xl">
                <AboutCard
                    image="/placeholders/400x550.jpg"
                    title="About Section"
                    overline="Uverest"
                >
                    <AboutContent />
                </AboutCard>
            </Container>
        </Box>
    );
};

export default AboutSection;
