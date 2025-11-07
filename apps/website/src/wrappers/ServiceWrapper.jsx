import {
    Box,
    Grid,
    Stack,
    Card,
    Typography,
    Button,
    Link as MuiLink,
    Divider,
} from "@mui/material";
import { useLocation, Link } from "react-router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const links = [
    { label: "Caça Vazamentos", to: "/servicos/caca-vazamento" },
    { label: "Encanador Hidráulico", to: "/servicos/encanador" },
    { label: "Desentupimentos", to: "/servicos/desentupimentos" },
    { label: "Limpeza e Sucção de Fossas", to: "/servicos/limpa-fossa" },
    { label: "Hidrojateamento de Alta Pressão", to: "/servicos/hidrojateamento" },
    { label: "Dedetização e Controle de Pragas", to: "/servicos/dedetizacao" },
];

const ServiceWrapper = ({ children }) => {
    const location = useLocation();

    return (
        <Box>
            <Grid container spacing={4}>

                {/* Sidebar */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box
                        component="aside"
                        sx={{
                            position: { md: "sticky" },
                            top: 120,
                        }}
                    >
                        {/* Lista de serviços */}
                        <Card
                            variant="outlined"
                            sx={{
                                p: 2,
                                mb: 3,
                                borderColor: "divider",
                                bgcolor: "background.paper",
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                fontWeight={700}
                                mb={2}
                            >
                                Nossos Serviços
                            </Typography>

                            <Stack spacing={1}>
                                {links.map((link) => {
                                    const isActive = location.pathname === link.to;
                                    return (
                                        <MuiLink
                                            key={link.to}
                                            component={Link}
                                            to={link.to}
                                            underline="none"
                                            color={isActive ? "primary.main" : "text.secondary"}
                                            sx={{
                                                fontWeight: isActive ? 600 : 400,
                                                pl: 1,
                                                borderLeft: isActive
                                                    ? "3px solid"
                                                    : "3px solid transparent",
                                                borderColor: isActive ? "primary.main" : "transparent",
                                                transition: "all 0.25s ease",
                                                "&:hover": {
                                                    color: "primary.main",
                                                    pl: 1.5,
                                                },
                                            }}
                                        >
                                            {link.label}
                                        </MuiLink>
                                    );
                                })}
                            </Stack>
                        </Card>

                        {/* Card CTA */}
                        <Card
                            sx={{
                                p: 3,
                                textAlign: "center",
                                bgcolor: "primary.main",
                                color: "common.white",
                                borderRadius: 2,
                                boxShadow: 4,
                            }}
                        >
                            <Typography variant="h6" fontWeight={700} mb={1}>
                                Atendimento 24h
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ opacity: 0.9, mb: 2, lineHeight: 1.5 }}
                            >
                                Precisa de ajuda agora?
                                Fale com nossa equipe pelo WhatsApp e receba atendimento
                                imediato em Porto Alegre e região.
                            </Typography>
                            <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 2 }} />
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                fullWidth
                                startIcon={<WhatsAppIcon />}
                                onClick={() => window.open(whatsappLinkURL, "_blank")}
                                sx={{
                                    fontWeight: 600,
                                    textTransform: "none",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                                    "&:hover": {
                                        backgroundColor: "#25D366",
                                        boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                                    },
                                }}
                            >
                                Falar no WhatsApp
                            </Button>
                        </Card>
                    </Box>
                </Grid>

                {/* Conteúdo principal */}
                <Grid size={{ xs: 12, md: 9 }}>{children}</Grid>

            </Grid>
        </Box>
    );
};

export default ServiceWrapper;