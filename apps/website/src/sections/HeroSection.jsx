import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HeroSlider from "@uverest/design-system/organisms/hero/HeroSlider";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const slides = [
    {
        id: 1,
        headLine: {
            text: "Há 16 anos trazendo empresas para o meio digital",
            color: "primary.contrastText",
        },
        title: {
            text: "Sistemas Personalizados + Apps + Websites",
            color: "common.black",
        },
        description: {
            text: `Desenvolvimento de websites e sistemas para internet.`,
            color: grey[900],
        },
        img: "/placeholders/1360x650.jpg",
        ctaPrimary: {
            label: "Fale Conosco",
            href: whatsappLinkURL,
            target: "_blank",
            variant: "contained",
            size: "large",
            endIcon: <WhatsAppIcon />,
        },
        ctaSecondary: { label: "Saiba mais", to: "#about" },
        overlay: null,
    },
    {
        id: 2,
        headLine: {
            text: "Venha para o mundo dos apps nativos",
            color: "primary.main",
        },
        title: {
            text: "Apps nativos para Android e IOS",
            color: grey[900],
        },
        description: {
            text: "Transforme o seu negócio em um meio digital que caiba na palma da mão de seu cliente.",
            color: grey[900],
        },
        img: "/placeholders/1360x650.jpg",
        overlay: { color: "light", opacity: 0.7 },
    }
];


const HeroSection = () => {

    return (
        <Box component='section' id="home">
            <HeroSlider slides={slides} />
        </Box>
    )
}

export default HeroSection;