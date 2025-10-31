import { Box, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "@website/components/ui/SectionTitle";

const faqItems = [
    {
        question: "Pergunta 1?",
        answer: "Resposta da pergunta 1.",
    },
    {
        question: "Pergunta 2?",
        answer: "Resposta da pergunta 3.",
    },
    {
        question: "Pergunta 3?",
        answer: "Resposta da pergunta 3.",
    },
    {
        question: "Pergunta 4?",
        answer: "Resposta da pergunta 4.",
    },
];

const FaqSection = () => {
    return (
        <Box id="faq" sx={{ py: 8 }}>
            <Container maxWidth="xl">

                <SectionTitle title="Perguntas Frequentes" subtitle="FAQ" align="center" />

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
