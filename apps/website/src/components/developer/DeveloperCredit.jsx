import { Box, Link, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function DeveloperCredit({
    name = "Gabriel Coelho",
    whatsappNumber = "5551994426690",
    message = "Olá, Gabriel. Vi um site que você desenvolveu e gostaria de saber mais.",
    hrefOverride,
    showIcon = true,
    align = "right",
    color = "secondary",
    gap = 0.5,
    sx = {},
}) {
    const getWhatsappLink = (rawNumber, text) => {
        const digits = String(rawNumber).replace(/\D+/g, "");
        if (!digits) return null;
        const encoded = encodeURIComponent(text || "");
        return `https://wa.me/${digits}${encoded ? `?text=${encoded}` : ""}`;
    };

    const href = hrefOverride || getWhatsappLink(whatsappNumber, message);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: alignToJustify(align) },
                alignItems: "center",
                gap,
                ...sx,
            }}
        >
            <Stack>
                <Typography component="span" color={color} variant="caption" sx={{ opacity: 0.9 }}>
                    Desenvolvido por:
                </Typography>

                {href ? (
                    <Link
                        color={color}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            opacity: 1,
                            fontSize: 14,
                        }}
                    >
                        {showIcon && <WhatsAppIcon fontSize="small" />} {name}
                    </Link>
                ) : (
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                        {name}
                    </Typography>
                )}
            </Stack>
        </Box>
    );
}

function alignToJustify(pos) {
    switch (pos) {
        case "left":
            return "flex-start";
        case "center":
            return "center";
        case "right":
        default:
            return "flex-end";
    }
}

// Exemplo de uso no rodapé
// <Box py={1} textAlign="center" fontSize={14} opacity={0.8} bgcolor="primary.main">
//   <Container>
//     <Grid container spacing={2} alignItems="center">
//       <Grid size={{ xs: 12, md: 6 }}>
//         © {new Date().getFullYear()} Lagom - Engenharia Ambiental. Todos os direitos reservados.
//       </Grid>
//       <Grid size={{ xs: 12, md: 6 }}>
//         <DeveloperCredit align="right" />
//       </Grid>
//     </Grid>
//   </Container>
// </Box>