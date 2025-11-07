import { Container, Box, Typography } from "@mui/material";
import AboutCard from "@website/components/AboutCard";
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
