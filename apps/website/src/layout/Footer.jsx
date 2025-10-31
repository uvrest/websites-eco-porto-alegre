import { Link } from "react-router";
import { Box, Container, Grid, Typography, Divider, Link as MuiLink, Stack, IconButton, Avatar } from "@mui/material";
import { WhatsApp, Instagram } from "@mui/icons-material";
import { env } from "@website/app/config/env";
import Brand from "@website/components/brand/Brand";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const doctors = [
    {
        name: "Dr. Bernardo Pinatti",
        slug: "dr-bernardo",
        avatar: "doctors/avatar-bernardo.png",
        instagram: "https://www.instagram.com/drbernardopinatti/",
        page: "corpo-clinico/dr-bernardo",
    },
    {
        name: "Dr. Tadeu Ludwig",
        slug: "dr-tadeu",
        avatar: "doctors/avatar-tadeu.jpg",
        instagram: "https://www.instagram.com/drtadeuradioterapia/",
        page: "corpo-clinico/dr-tadeu",
    },
];

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            {/* Conteúdo principal */}
            <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, py: 6 }}>
                <Container>
                    <Grid container spacing={4}>
                        {/* Coluna 1: Logo e descrição */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box>
                                <Brand height={60} src="brand/logo-dk.svg" />
                                <Divider sx={{ my: 2, borderColor: "divider" }} />
                                <Typography variant="body2" color="text.secondary">
                                    A NORT alia tecnologia, precisão e acolhimento humano para oferecer
                                    tratamentos de radioterapia com excelência e segurança.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Coluna 2: Médicos (dados vindos do array) */}
                        <Grid size={{ xs: 12, md: 4 }}>

                            <Typography variant="subtitle1" fontWeight={600} mb={1}>
                                Corpo Clínico
                            </Typography>

                            <Stack spacing={2.5}>
                                {doctors.map((doctor) => (
                                    <Stack
                                        key={doctor.slug}
                                        direction="row"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Avatar
                                            src={doctor.avatar}
                                            alt={doctor.name}
                                            sx={{
                                                width: 54,
                                                height: 54,
                                                boxShadow: 1,
                                                bgcolor: "grey.200",
                                            }}
                                        />

                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={0.5}
                                            flexWrap="wrap"
                                        >
                                            <MuiLink
                                                component={Link}
                                                to={doctor.page}
                                                underline="hover"
                                                color="text.primary"
                                                fontWeight={500}
                                                sx={{ mr: 0.5 }}
                                            >
                                                {doctor.name}
                                            </MuiLink>

                                            {doctor.instagram && (
                                                <IconButton
                                                    href={doctor.instagram}
                                                    target="_blank"
                                                    size="medium"
                                                    color="primary"
                                                    aria-label={`Instagram ${doctor.name}`}
                                                >
                                                    <Instagram fontSize="small" />
                                                </IconButton>
                                            )}
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Coluna 3: Contato e links */}
                        <Grid size={{ xs: 12, md: 4 }}>

                            <Typography variant="subtitle1" fontWeight={600} mb={1}>
                                Contato
                            </Typography>

                            <Stack spacing={1.5}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <WhatsApp fontSize="small" color="success" />
                                    <MuiLink
                                        href={whatsappLinkURL}
                                        target="_blank"
                                        underline="hover"
                                        color="text.primary"
                                    >
                                        +55 (55) 99973-9347
                                    </MuiLink>
                                </Stack>

                                <Box>
                                    <MuiLink
                                        //href="/docs/politica-privacidade.pdf"
                                        href="#"
                                        //download
                                        underline="hover"
                                        color="text.primary"
                                        onClick={() => { alert('Aguardando PDF') }}
                                    >
                                        Política de Privacidade e LGPD
                                    </MuiLink>
                                </Box>

                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        [$_lista de convênios_]
                                    </Typography>
                                </Box>
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