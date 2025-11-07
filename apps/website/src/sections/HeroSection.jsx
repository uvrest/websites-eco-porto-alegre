import { alpha, darken, Container, Box, Stack, Typography } from "@mui/material";
import CtaButton from "@uverest/design-system/atoms/CtaButton";
import { WhatsApp, PlumbingRounded } from '@mui/icons-material';
import HeroVideo from "@uverest/design-system/organisms/hero/HeroVideo";
import bgVideo from "@website/assets/videos/poa-1.mp4";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const HeroOverlay = () => (
    <Box
        sx={(theme) => ({
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
            mixBlendMode: "color", // deixa o overlay reagir às cores do vídeo
        })}
    />
);

const HeroOverlayTopEdge = () => (
    <Box
        sx={(theme) => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "30%",
            zIndex: 1,
            background: `linear-gradient(
        180deg,
        ${darken(alpha(theme.palette.primary.dark, 0.9), 0.2)} 0%,
        ${darken(alpha(theme.palette.primary.dark, 0), 0.2)} 100%
      )`,
            mixBlendMode: "darken",
        })}
    />
);

const HeroOverlayBottomEdge = () => (
    <Box
        sx={(theme) => ({
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "45%",
            zIndex: 1,
            background: `linear-gradient(
        0deg,
        ${darken(alpha(theme.palette.primary.dark, 0.9), 0.2)} 0%,
        ${darken(alpha(theme.palette.primary.dark, 0), 0.2)} 100%
      )`,
            mixBlendMode: "color",
        })}
    />
);

// Vinheta suave nos cantos
const HeroVignette = () => (
    <Box
        sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
                "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
            pointerEvents: "none",
        }}
    />
);

const HeroContent = () => (
    <Container
        maxWidth="lg"
        sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            py: { xs: 8, md: 12 },
        }}
    >

        <Box>
            <Typography
                variant="body1"
                color="common.white"
                sx={{
                    maxWidth: { xs: "100%", md: "65%" },
                    wordBreak: "break-word", // evita overflow
                    overflowWrap: "break-word", // suporte total
                    whiteSpace: "normal", // garante quebra em mobile
                }}
            >
                Soluções rápidas e eficientes em desentupimentos e caça-vazamentos, com
                equipe especializada e atendimento em toda Porto Alegre e região
                metropolitana.
            </Typography>

            <Typography
                variant="h1"
                component="h2"
                color="primary.contrastText"
                sx={{
                    fontSize: { xs: "2rem", sm: "3rem", md: "4.75rem" },
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    mt: 1,
                }}
            >
                Desentupimentos e Caça Vazamentos
            </Typography>

            <Stack direction="row" spacing={2} mt={3} flexWrap="wrap">
                <CtaButton
                    label="Orçamento"
                    variant="contained"
                    color="success"
                    size="large"
                    icon={<WhatsApp />}
                    href={whatsappLinkURL}
                    target="_blank"
                />
                <CtaButton
                    label="Nossos Serviços"
                    variant="outlined"
                    size="large"
                    icon={<PlumbingRounded />}
                    sx={{
                        border: "1px solid #f9f9f9",
                        color: "#f9f9f9",
                    }}
                    to="/servicos"
                />
            </Stack>

        </Box>

    </Container>
);

const HeroSection = () => {

    return (
        <Box component='section' id="home">
            <HeroVideo videoPath={bgVideo} height={{ xs: "85dvh", md: "95dvh" }}>
                <HeroOverlay />
                <HeroOverlayTopEdge />
                <HeroOverlayBottomEdge />
                <HeroVignette />
                <HeroContent />
            </HeroVideo>
        </Box>
    )
}

export default HeroSection;