import { Box } from "@mui/material";
import Features from "@website/components/Features";
import {
    AccessTimeRounded,
    EngineeringRounded,
    CompostRounded,
} from "@mui/icons-material";


const FeaturesSection = () => {

    const features = [
        {
            id: 1,
            title: "Atendimento 24 horas",
            description:
                "Estamos sempre disponíveis para emergências, garantindo agilidade e eficiência em qualquer horário, inclusive fins de semana e feriados.",
            Icon: AccessTimeRounded,
        },
        {
            id: 2,
            title: "Profissionais Qualificados",
            description:
                "Contamos com uma equipe experiente e treinada para identificar e resolver qualquer tipo de entupimento ou vazamento com segurança e precisão.",
            Icon: EngineeringRounded,
        },
        {
            id: 3,
            title: "Responsabilidade Ambiental",
            description:
                "Utilizamos métodos e produtos sustentáveis, evitando o desperdício de água e reduzindo o impacto ambiental em todas as etapas do serviço.",
            Icon: CompostRounded,
        },
    ];

    return (
        <Box component="section" id="features">
            <Features items={features} />
        </Box>
    )
}

export default FeaturesSection;