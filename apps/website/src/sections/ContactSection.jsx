import { Container, Box, Stack, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import { phoneNumber, emailContact, whatsappLinkURL } from "@website/app/config/contactInfo";
import { PhoneRounded, WhatsApp, EmailRounded } from "@mui/icons-material";

// --- Ações dinâmicas ---
const handlePhoneClick = (phone) => {
    window.open(`tel:${phone.raw}`, "_self");
};

const handleWhatsAppClick = (link) => {
    window.open(link, "_blank");
};

const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, "_self");
};

const contactData = [
    {
        title: "Telefone",
        content: phoneNumber.formatted,
        Icon: PhoneRounded,
        action: () => handlePhoneClick(phoneNumber),
    },
    {
        title: "WhatsApp",
        content: phoneNumber.formatted,
        Icon: WhatsApp,
        action: () => handleWhatsAppClick(whatsappLinkURL),
    },
    {
        title: "E-mail",
        content: emailContact,
        Icon: EmailRounded,
        action: () => handleEmailClick(emailContact),
    },
];

const GoogleMapIframe = () => (
    <Box
        component="iframe"
        src="https://www.google.com/maps/d/u/1/embed?mid=1_sbVcE1_reHT_QBLsScFmQM5cxz8Ek0&ehbc=2E312F&noprof=1"
        sx={{
            width: "100%",
            height: { xs: 350, md: 550 },
            border: 0,
            borderRadius: 2,
        }}
    />
);

// --- Card de contato ---
const ContactCard = ({ title, content, Icon, action }) => (
    <Card
        sx={{
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
        }}
    >
        <CardActionArea onClick={action}>
            <CardContent
                sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    py: 2,
                }}
            >
                <Box>
                    <Icon fontSize="large" color="primary" />
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
);

const ContactSection = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Grid container alignItems="center" spacing={3}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box>
                        <GoogleMapIframe />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>

                    <Typography variant="overline" color="secondary">Entre em contato com a Eco Porto Alegre</Typography>
                    <Typography variant="h3" mb={3}>Atendimento 24 horas, de domingo a domingo</Typography>

                    <Stack spacing={2}>
                        {contactData.map((c) => (
                            <ContactCard key={c.title} {...c} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactSection;