import { Box } from "@mui/material";
import Services from "@website/components/Services";
import SectionTitle from "@website/components/ui/SectionTitle";

const ServicesSection = () => {

    const services = [
        {
            id: 1,
            iconImage: 'templates/nutrition/icons/lose-weight.png',
            title: "Serviço 01",
            description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            id: 2,
            iconImage: 'templates/nutrition/icons/nutrition.png',
            title: "Serviço 02",
            description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        {
            id: 3,
            iconImage: 'templates/nutrition/icons/female-doctor.png',
            title: "Serviço 03",
            description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        }
    ];

    return (
        <Box component="section" sx={{ py: 12, backgroundColor: 'background.default' }} id="especialidades">
            <SectionTitle title="Especialidades" subtitle="Como posso te ajudar?" />
            <Services items={services} />
        </Box>
    )
}

export default ServicesSection;