import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";

const ConsultationOptionsSection = () => {
    const options = [
        {
            id: 1,
            icon: <HomeRoundedIcon color="primary" fontSize="large" />,
            title: "Visitas Técnicas Presenciais (Porto Alegre e Região Metropolitana do Rio Grande do Sul)",
            description: "Estudo e análise detalhada de necessidades técnicas e mapas de resolução e otimização de ecossistema online digital.",
        },
        {
            id: 2,
            icon: <WifiRoundedIcon color="primary" fontSize="large" />,
            title: "Atendimento Online",
            description: "Ideal para quem busca praticidade. Atendimentos por vídeo, com a mesma atenção, resolução de problemas e resultados.",
        },
    ];

    return (
        <Box component="section" id="consultas" sx={{ py: 8, backgroundColor: "background.default" }}>
            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="center">

                    {/* Texto + opções */}
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="overline" color="primary">
                            Do seu jeito
                        </Typography>
                        <Typography variant="h2" sx={{ mb: 4 }}>
                            Agende uma reunião conosco
                        </Typography>

                        <Stack spacing={4}>
                            {options.map((opt) => (
                                <Stack key={opt.id} direction="row" spacing={2} alignItems="flex-start">
                                    {opt.icon}
                                    <Box>
                                        <Typography variant="h6" color="text.primary" gutterBottom>
                                            {opt.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {opt.description}
                                        </Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Imagem */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            component="img"
                            src="/placeholders/650x450.jpg"
                            alt="Agende sua consulta"
                            sx={{ width: "100%", borderRadius: 2 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ConsultationOptionsSection;