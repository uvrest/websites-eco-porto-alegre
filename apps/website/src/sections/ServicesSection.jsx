import { Box } from "@mui/material";
import Services from "@website/components/Services";
import SectionTitle from "@website/components/ui/SectionTitle";

const ServicesSection = () => {

    const services = [
        {
            id: 1,
            image: "services/caca-vazamento.jpg",
            title: "Caça Vazamentos",
            description:
                "Localizamos vazamentos de forma rápida e precisa, utilizando equipamentos eletrônicos modernos que evitam quebradeiras desnecessárias e reduzem custos no reparo.",
        },
        {
            id: 2,
            image: "services/hidraulica.jpg",
            title: "Encanador Hidráulico",
            description:
                "Executamos serviços hidráulicos completos — instalações, manutenções e reparos — com mão de obra qualificada e materiais de alta durabilidade.",
        },
        {
            id: 3,
            image: "services/desentupimento.webp",
            title: "Desentupimentos",
            description:
                "Desentupimento rápido e eficiente de pias, ralos, vasos sanitários, esgotos e tubulações em geral. Atendimento emergencial 24 horas, sem sujeira e sem complicação.",
        },
        {
            id: 4,
            image: "services/limpa-fossa.jpg",
            title: "Limpeza e Sucção de Fossas",
            description:
                "Realizamos limpeza, esgotamento e transporte de resíduos de fossas sépticas e caixas de gordura com segurança, responsabilidade ambiental e equipamentos adequados.",
        },
        {
            id: 5,
            image: "services/hidrojateamento.jpeg",
            title: "Hidrojateamento",
            description:
                "Utilizamos jatos de alta pressão para limpar e desobstruir tubulações, galerias e caixas d’água, garantindo fluxo livre e maior vida útil às instalações.",
        },
        {
            id: 6,
            image: "services/dedetizacao.png",
            title: "Dedetização e Controle de Pragas",
            description:
                "Eliminamos insetos, roedores e outras pragas com produtos certificados e seguros, protegendo sua residência ou empresa sem agredir o meio ambiente.",
        },
    ];

    return (
        <Box component="section" sx={{ py: 12, backgroundColor: 'background.default' }} id="especialidades">
            <SectionTitle title="Nossos Serviços" subtitle="Como a Eco Porto Alegre pode te ajudar" />
            <Services items={services} />
        </Box>
    )
}

export default ServicesSection;