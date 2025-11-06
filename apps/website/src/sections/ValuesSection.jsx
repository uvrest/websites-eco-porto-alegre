import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { RemoveRedEyeRounded, FlareRounded, CrisisAlertRounded } from "@mui/icons-material";

const values = [
    {
        id: 1,
        title: "Valores",
        description:
            "Trabalhamos com ética, transparência e respeito — aos clientes, aos colaboradores e ao meio ambiente. Buscamos sempre entregar serviços de qualidade, com segurança e comprometimento em cada atendimento.",
        Icon: FlareRounded,
    },
    {
        id: 2,
        title: "Visão",
        description:
            "Ser referência em soluções hidráulicas e ambientais em Porto Alegre e região, reconhecida pela confiança, eficiência e responsabilidade socioambiental em cada projeto executado.",
        Icon: RemoveRedEyeRounded,
    },
    {
        id: 3,
        title: "Missão",
        description:
            "Oferecer serviços de desentupimento, hidráulica e controle ambiental com excelência técnica, atendimento 24 horas e práticas sustentáveis que preservem recursos naturais e garantam o bem-estar dos nossos clientes.",
        Icon: CrisisAlertRounded,
    },
];


const ValueCard = ({ title, description, Icon }) => {
    return (
        <Stack
            spacing={0}
            sx={(theme) => ({
                position: "relative",
                backgroundColor: theme.palette.background.paper,
                opacity: 1,
                height: '100%',
                p: 5,
                zIndex: 2,
                borderRadius: 1,
                boxShadow: "0 0 10px 5px rgba(0,0,0,0.056)",
                transition: "all 300ms ease-in-out",
                "&:hover": {
                    transform: "translateX(0px) translateY(-10px)",
                    boxShadow: "0 0 20px 10px rgba(0,0,0,0.1)",
                }
            })}>
            <Box>
                {<Icon fontSize="large" color="primary" aria-hidden />}
            </Box>
            <Typography variant="h5" component="h4" mb={1}>{title}</Typography>
            <Typography color="text.secondary" variant="body2" component='span'>{description}</Typography>
        </Stack>
    )
}

const ValuesSection = () => {
    return (
        <Box py={5} bgcolor="primary.main">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {values.map((value) => (
                        <Grid size={{ xs: 12, md: 4 }} key={value.id}>
                            <ValueCard {...value} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default ValuesSection;