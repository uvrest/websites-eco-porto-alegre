import { Box, Container, Grid, Typography, Divider, Link as MuiLink, Stack } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { env } from "@website/app/config/env";
import Brand from "@website/components/brand/Brand";
import { whatsappLinkURL } from "@website/app/config/contactInfo";
import { navigationMap } from "@website/app/config/navigationMap";

const contactInfo = {
    address: "Porto Alegre e Região Metropolitana",
    phone: "(51) 99999-9999",
    email: "contato@ecoportoalegre.com.br",
};

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            {/* Conteúdo principal */}
            <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, py: 6 }}>

                <Container maxWidth="lg">
                    <Grid container spacing={4}>

                        {/* Coluna 1: Logo e descrição */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box>
                                <Brand height={75} src="brand/logo-bk.png" />
                                <Divider sx={{ my: 2, borderColor: "divider" }} />
                                <Typography variant="body2" color="text.secondary">
                                    A Eco Porto Alegre oferece soluções completas em desentupimentos, hidráulica,
                                    caça-vazamentos e serviços ambientais. Atendimento 24 horas em Porto Alegre e
                                    Região Metropolitana, com responsabilidade e eficiência.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Coluna 2: Lista de links de serviços */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                fontWeight={600}
                                mb={2}
                            >
                                Nossos Serviços
                            </Typography>

                            <Stack spacing={0.8}>
                                {navigationMap.main[2].submenu.map((item) => (
                                    <MuiLink
                                        key={item.to}
                                        href={item.to}
                                        color="text.secondary"
                                        underline="hover"
                                        sx={{
                                            "&:hover": { color: "primary.main" },
                                            transition: "color 0.2s",
                                        }}
                                    >
                                        {item.label}
                                    </MuiLink>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Coluna 3: Lista de links principais */}
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                fontWeight={600}
                                mb={2}
                            >
                                Empresa
                            </Typography>

                            <Stack spacing={0.8}>
                                {navigationMap.main
                                    .filter((link) => link.label !== "Serviços")
                                    .map((item) => (
                                        <MuiLink
                                            key={item.to}
                                            href={item.to}
                                            color="text.secondary"
                                            underline="hover"
                                            sx={{
                                                "&:hover": { color: "primary.main" },
                                                transition: "color 0.2s",
                                            }}
                                        >
                                            {item.label}
                                        </MuiLink>
                                    ))}
                            </Stack>
                        </Grid>

                        {/* Coluna 4: Contato e links */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                fontWeight={600}
                                mb={2}
                            >
                                Contato
                            </Typography>

                            <Stack spacing={1.5}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <LocationOn sx={{ color: "primary.main", fontSize: 20 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {contactInfo.address}
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Phone sx={{ color: "primary.main", fontSize: 20 }} />
                                    <MuiLink
                                        href={whatsappLinkURL}
                                        color="text.secondary"
                                        underline="hover"
                                    >
                                        {contactInfo.phone}
                                    </MuiLink>
                                </Stack>

                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Email sx={{ color: "primary.main", fontSize: 20 }} />
                                    <MuiLink
                                        href={`mailto:${contactInfo.email}`}
                                        color="text.secondary"
                                        underline="hover"
                                    >
                                        {contactInfo.email}
                                    </MuiLink>
                                </Stack>
                            </Stack>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* Copyright */}
            <Box
                sx={{
                    py: 3,
                    textAlign: "center",
                    backgroundColor: (theme) => theme.palette.primary.main,
                }}
            >
                <Typography variant="caption" color="white">
                    © {year} {env.VITE_APP_NAME} — todos os direitos reservados
                </Typography>
            </Box>
        </>
    );
};

export default Footer;