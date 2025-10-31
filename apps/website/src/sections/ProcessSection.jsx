import { Container, Grid, Box, Typography } from "@mui/material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const steps = [
    {
        id: 1,
        title: "1 - Step 01",
        description: "Briefing, Análise e Mapeamento de Soluções.",
        Icon: AssignmentTurnedInOutlinedIcon,
        color: "primary.main",
        dark: true,
    },
    {
        id: 2,
        title: "2 - Step 02",
        description: "Planejamento e Produção de Identidade Visual.",
        Icon: ChatBubbleOutlineOutlinedIcon,
        color: "background.paper",
        dark: false,
    },
    {
        id: 3,
        title: "3 - Step 03",
        description: "Desenvolvimento, Segurança e Deploy.",
        Icon: ListAltOutlinedIcon,
        color: "primary.main",
        dark: true,
    },
    {
        id: 4,
        title: "4 - Step 04",
        description: "Suporte contínuo para garantir resultados sustentáveis.",
        Icon: GroupOutlinedIcon,
        color: "background.paper",
        dark: false,
    },
];

const ProcessCard = ({ Icon, title, description, color, dark = false, ...rest }) => {
    return (
        <Box
            sx={{
                height: { md: "50%", xs: "auto" },
                px: 4,
                py: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: color,
                color: !!dark ? "common.white" : "text.primary",
            }}
            {...rest}
        >
            <Icon sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h5" fontWeight={600} mb={2}>
                {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </Box>
    )
}

const ProcessSection = () => {
    return (
        <Box component="section">
            <Container maxWidth={false} disableGutters>
                <Grid container>

                    {/* Coluna 1 - Imagem */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            component="img"
                            src="/placeholders/400x550.jpg"
                            alt="Processo 1"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Grid>

                    {/* Coluna 2 - 2 blocos */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        {steps.slice(0, 2).map((step) => (
                            <ProcessCard
                                key={step.id}
                                Icon={step.Icon}
                                title={step.title}
                                description={step.description}
                                color={step.color}
                                dark={step.dark}
                            />
                        ))}
                    </Grid>

                    {/* Coluna 3 - Imagem */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            component="img"
                            src="/placeholders/400x550.jpg"
                            alt="Processo 2"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Grid>

                    {/* Coluna 4 - 2 blocos */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        {steps.slice(2, 4).map((step) => (
                            <ProcessCard
                                key={step.id}
                                Icon={step.Icon}
                                title={step.title}
                                description={step.description}
                                color={step.color}
                                dark={step.dark}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProcessSection;