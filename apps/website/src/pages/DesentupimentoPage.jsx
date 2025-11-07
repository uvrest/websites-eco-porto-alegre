import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/desentupimento.webp";

const Content = () => {
    return (
        <Box component="article" pb={5}>
            {/* Imagem principal */}
            <Box
                sx={{
                    position: "relative",
                    height: 450,
                    overflow: "hidden",
                    borderRadius: 2,
                    my: 4,
                }}
            >
                <Box
                    component="img"
                    src={mainImage}
                    alt="Serviços de desentupimento em Porto Alegre"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Conteúdo */}
            <Typography
                component="span"
                variant="overline"
                color="secondary"
                mt={4}
                display="block"
            >
                Ralos, esgotos, fossas, encanamentos, tubulações e colunas
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Desentupimentos
            </Typography>

            <Typography paragraph>
                A <strong>Eco Porto Alegre</strong> oferece serviços completos de{" "}
                <strong>desentupimento residencial, comercial e industrial</strong>,
                utilizando tecnologia moderna para resolver o problema com agilidade,
                limpeza e segurança. Nossa equipe é treinada para atuar em{" "}
                <strong>ralos, vasos sanitários, pias, esgotos, caixas de gordura,
                    fossas e tubulações em geral</strong>.
            </Typography>

            <Typography paragraph>
                Trabalhamos com métodos eficientes, como o{" "}
                <strong>hidrojateamento de alta pressão</strong>, que remove obstruções
                sem danificar as instalações, além de ferramentas especializadas para
                desobstruções localizadas. Dessa forma, garantimos resultados rápidos,
                duradouros e sem sujeira.
            </Typography>

            <Typography paragraph>
                Também realizamos <strong>manutenção preventiva</strong> em redes
                hidráulicas e sistemas de esgoto, evitando entupimentos futuros e
                reduzindo custos com emergências. Nosso atendimento é{" "}
                <strong>24 horas por dia, inclusive em domingos e feriados</strong>,
                atendendo toda <strong>Porto Alegre e Região Metropolitana</strong>.
            </Typography>

            <Typography paragraph>
                Conte com a <strong>Eco Porto Alegre</strong> para um serviço
                profissional, seguro e sustentável. Eliminamos o problema de forma
                definitiva, priorizando a satisfação do cliente e o respeito ao meio
                ambiente.
            </Typography>
        </Box>
    );
};

const DesentupimentoPage = () => {
    useEffect(() => {
        setPageMeta({
            title: "Desentupimentos",
            description:
                "Serviços profissionais de desentupimento em Porto Alegre e Região Metropolitana. Desobstrução de ralos, pias, vasos, esgotos e fossas com hidrojateamento e atendimento 24h.",
        });
    }, []);

    return (
        <>
            <PageHeader
                pageTitle="Desentupimentos"
                overline="Serviços rápidos e eficientes para ralos, esgotos e tubulações"
            />
            <Container>
                <ServiceWrapper>
                    <Content />
                </ServiceWrapper>
            </Container>
        </>
    );
};

export default DesentupimentoPage;