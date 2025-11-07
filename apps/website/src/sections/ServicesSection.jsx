import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import Services from "@website/components/Services";
import SectionTitle from "@website/components/ui/SectionTitle";
import cacaVazamentoImg from "@website/assets/images/services/caca-vazamento.jpg";
import hidraulicaImg from "@website/assets/images/services/hidraulica.jpg";
import desentupimentoImg from "@website/assets/images/services/desentupimento.webp";
import limpaFossaImg from "@website/assets/images/services/limpa-fossa.jpg";
import hidrojateamentoImg from "@website/assets/images/services/hidrojateamento.jpeg";
import dedetizacaoImg from "@website/assets/images/services/dedetizacao.png";

const ServicesSection = () => {

    const navigate = useNavigate();

    const handleRedirection = (to) => {
        navigate(to);
    }

    const services = [
        {
            id: 1,
            image: cacaVazamentoImg,
            title: "Caça Vazamentos",
            description:
                "Localizamos vazamentos de forma rápida e precisa, utilizando equipamentos eletrônicos modernos que evitam quebradeiras desnecessárias e reduzem custos no reparo.",
            action: () => { handleRedirection("/servicos/caca-vazamento") },
        },
        {
            id: 2,
            image: hidraulicaImg,
            title: "Encanador Hidráulico",
            description:
                "Executamos serviços hidráulicos completos — instalações, manutenções e reparos — com mão de obra qualificada e materiais de alta durabilidade.",
            action: () => { handleRedirection("/servicos/encanador") },
        },
        {
            id: 3,
            image: desentupimentoImg,
            title: "Desentupimentos",
            description:
                "Desentupimento rápido e eficiente de pias, ralos, vasos sanitários, esgotos e tubulações em geral. Atendimento emergencial 24 horas, sem sujeira e sem complicação.",
            action: () => { handleRedirection("/servicos/desentupimentos") },
        },
        {
            id: 4,
            image: limpaFossaImg,
            title: "Limpeza e Sucção de Fossas",
            description:
                "Realizamos limpeza, esgotamento e transporte de resíduos de fossas sépticas e caixas de gordura com segurança, responsabilidade ambiental e equipamentos adequados.",
            action: () => { handleRedirection("/servicos/limpa-fossa") },
        },
        {
            id: 5,
            image: hidrojateamentoImg,
            title: "Hidrojateamento",
            description:
                "Utilizamos jatos de alta pressão para limpar e desobstruir tubulações, galerias e caixas d’água, garantindo fluxo livre e maior vida útil às instalações.",
            action: () => { handleRedirection("/servicos/hidrojateamento") },
        },
        {
            id: 6,
            image: dedetizacaoImg,
            title: "Dedetização e Controle de Pragas",
            description:
                "Eliminamos insetos, roedores e outras pragas com produtos certificados e seguros, protegendo sua residência ou empresa sem agredir o meio ambiente.",
            action: () => { handleRedirection("/servicos/dedetizacao") },
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