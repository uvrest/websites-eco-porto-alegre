import { Box, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, lighten } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "@website/components/ui/SectionTitle";

const faqItems = [
    {
        question: "A Eco Porto Alegre atende nos finais de semanas e feriados?",
        answer: "Sim! Nosso atendimento está sempre disponível. 24 horas, todos os dias da semana, incluindo sábados, domingos e feriados.",
    },
    {
        question: "Os produtos utilizados pela empresa são seguros?",
        answer: "Todos os produtos que utilizamos são certificados, seguros para humanos e pets, e aprovados pelos órgãos reguladores.",
    },
    {
        question: "Preciso sair de casa durante a execução do serviço?",
        answer: "Na grande maioria dos casos, não. Nossa equipe trabalha com segurança, higiene e o mínimo de incômodo possível.",
    },
    {
        question: "Em quais regiões a Eco Porto Alegre atende?",
        answer: "Nossa abrangência de atendimento compreende Porto Alegre e toda sua Região Metropolitana.",
    },
];

const FaqSection = () => {
    return (
        <Box
            sx={(theme) => ({
                py: 12,
                backgroundColor: lighten(theme.palette.primary.dark, 0.1),
            })}
        >
            <Container maxWidth="lg">

                <SectionTitle title="Perguntas Frequentes" subtitle="FAQ" align="center" color="#f0f0f0" supportColor="#D0D0D0" />

                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 8 }} offset={{ md: 2 }}>
                        {faqItems.map((item, index) => (
                            <Accordion key={index} elevation={0}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight={600}>{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FaqSection;
