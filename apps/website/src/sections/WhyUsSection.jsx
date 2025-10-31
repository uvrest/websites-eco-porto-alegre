import { Box, Container, Grid, Typography, darken } from "@mui/material";
import SectionTitle from "@website/components/ui/SectionTitle";
import whyUsImage from "@website/assets/images/about-img-1.jpg";

const title = "Por Que a Eco Porto Alegre?";
const overline = "6 Motivos para contratar os serviços da Eco Porto Alegre";

const benefits = [
    {
        title: "Equipe Especializada",
        description:
            "Profissionais experientes e treinados para resolver qualquer problema hidráulico, do desentupimento ao caça-vazamento, com segurança e precisão.",
    },
    {
        title: "Atendimento Rápido e 24h",
        description:
            "Disponíveis dia e noite, inclusive em finais de semana e feriados, garantindo resposta imediata em situações de urgência.",
    },
    {
        title: "Compromisso Ambiental",
        description:
            "Adotamos métodos e produtos sustentáveis, minimizando o impacto ambiental e promovendo o uso consciente da água.",
    },
    {
        title: "Serviços Personalizados",
        description:
            "Cada atendimento é planejado de acordo com as necessidades do cliente, assegurando eficiência e economia em cada solução.",
    },
    {
        title: "Equipamentos Modernos",
        description:
            "Trabalhamos com tecnologia de ponta em inspeção, desentupimento e detecção de vazamentos, garantindo resultados duradouros.",
    },
    {
        title: "Qualidade Garantida",
        description:
            "Seguimos padrões rigorosos de qualidade e segurança, entregando serviços confiáveis que preservam seu imóvel e o meio ambiente.",
    },
];


const Benefit = ({ title, description }) => (
    <Box py={1}>
        <Typography variant="h5" color="#F0F0F0" mb={1}>{title}</Typography>
        <Typography variant="body1" color="#D0D0D0">{description}</Typography>
    </Box>
)


const WhyUsSection = () => {
    return (
        <Box
            py={10}
            sx={(theme) => ({
                backgroundColor: darken(theme.palette.primary.dark, 0.3),
            })}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            component="img"
                            src={whyUsImage}
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box py={5}>

                            <SectionTitle
                                title={title}
                                subtitle={overline}
                                align="left"
                                variant="h2"
                                color="common.white"
                                supportColor="common.white"
                            />

                            <Box mt={3}>
                                <Grid container spacing={3}>
                                    {benefits.map((benefit) => (
                                        <Grid key={benefit.title} size={{ xs: 12, md: 6 }}>
                                            <Benefit title={benefit.title} description={benefit.description} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default WhyUsSection;