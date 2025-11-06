import { Container, Box, Typography, Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import AboutCard from "@website/components/AboutCard";
import { socialData } from "@website/app/config/contactInfo";
import aboutImge from "@website/assets/images/leak-detection.jpg";

const AboutContent = () => {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, }}>
                A Eco Porto Alegre é uma empresa especializada em desentupimentos, serviços hidráulicos, caça-vazamentos,
                dedetização e limpa fossa, oferecendo soluções completas para residências, comércios e indústrias.
                Atuamos com tecnologia moderna e equipe qualificada, garantindo atendimento ágil, seguro e eficiente em
                toda Porto Alegre e Região Metropolitana.
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, }}>
                Comprometida com a responsabilidade ambiental, a Eco Porto Alegre utiliza métodos sustentáveis e equipamentos
                que reduzem o impacto ao meio ambiente, sem abrir mão da qualidade e precisão no serviço prestado. Nosso atendimento 24
                horas está sempre pronto para atender emergências e proporcionar tranquilidade aos nossos clientes, com transparência,
                confiança e respeito.
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
                Siga-nos no Instagram
            </Button>
        </Box>
    )
}

const AboutSection = ({ bgColor = "background.default" }) => {
    return (
        <Box id="sobre" sx={{ py: 6, backgroundColor: { bgColor } }}>
            <Container maxWidth="lg">
                <AboutCard
                    image={aboutImge}
                    title="Atendimento especializado e responsabilidade ambiental"
                    overline="Sobre a Eco Porto Alegre"
                >
                    <AboutContent />
                </AboutCard>
            </Container>
        </Box>
    );
};

export default AboutSection;
