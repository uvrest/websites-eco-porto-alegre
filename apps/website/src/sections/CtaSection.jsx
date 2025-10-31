import { Box, Container, Typography } from "@mui/material";
import CtaButton from "@uverest/design-system/atoms/CtaButton";
import ctaBg from "@website/assets/images/cta-bg.jpg";
import { WhatsApp } from "@mui/icons-material";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const CtaSection = () => {
    return (
        <Box
            id="cta"
            sx={{
                position: "relative",
                backgroundColor: "common.black",
                color: "common.white",
                py: { xs: 8, md: 18 },
                textAlign: "center",
                overflow: "hidden",
                backgroundImage: `url(${ctaBg})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
            }}
        >
            {/* overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.62)",
                    zIndex: 0,
                }}
            />

            {/* conteúdo */}
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                    variant="overline"
                    sx={{ color: "secondary.light", fontWeight: 600, mb: 0 }}
                >
                    Estamos prontos para atendê-lo
                </Typography>

                <Typography variant="h2" sx={{ mb: 2 }}>
                    Atendimento 24 horas, de domingo a doming, inclusive feriados
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ mb: 4, maxWidth: 700, mx: "auto", opacity: 0.9 }}
                >
                    Nossa equipe está sempre de plantão para atender emergências com rapidez e segurança.
                    Trabalhamos 24 horas por dia para resolver vazamentos, entupimentos e outros imprevistos
                    sem complicação — em Porto Alegre e toda a Região Metropolitana.
                </Typography>

                <CtaButton
                    label="Agende uma visita"
                    href={whatsappLinkURL}
                    target="_blank"
                    color="primary"
                    size="large"
                    icon={<WhatsApp />}
                    sx={{ py: 2, px: 4 }}
                />
            </Container>
        </Box>
    );
};

export default CtaSection;
