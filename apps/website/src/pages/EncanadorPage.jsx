import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/hidraulica.jpg";

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
                    alt="Serviço de encanador hidráulico em Porto Alegre"
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
                Instalações, manutenções e reparos hidráulicos com qualidade e agilidade
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Encanador Hidráulico — Reparos e Instalações
            </Typography>

            <Typography paragraph>
                A <strong>Eco Porto Alegre</strong> realiza serviços completos de{" "}
                <strong>hidráulica e encanamento</strong>, oferecendo soluções seguras e
                duradouras para residências, condomínios, comércios e indústrias. Nossa
                equipe de encanadores qualificados atua com <strong>equipamentos modernos</strong> e técnicas atualizadas para garantir
                resultados eficientes e sem retrabalho.
            </Typography>

            <Typography paragraph>
                Executamos desde pequenas manutenções até grandes instalações — como
                <strong>troca de tubulações, instalação de torneiras, chuveiros,
                    válvulas, caixas d’água e redes completas de abastecimento e esgoto</strong>.
                Nosso atendimento é rápido, limpo e planejado para causar o mínimo de
                incômodo possível no ambiente do cliente.
            </Typography>

            <Typography paragraph>
                Todos os serviços seguem <strong>padrões técnicos e normas de segurança</strong>,
                garantindo estanqueidade, economia de água e durabilidade das
                instalações. Também realizamos inspeções preventivas e detecção de
                vazamentos ocultos, evitando danos estruturais e desperdício.
            </Typography>

            <Typography paragraph>
                Conte com a <strong>Eco Porto Alegre</strong> para cuidar da parte
                hidráulica do seu imóvel com <strong>profissionalismo, transparência e
                    responsabilidade ambiental</strong>. Estamos disponíveis{" "}
                <strong>24 horas por dia</strong> em Porto Alegre e Região Metropolitana.
            </Typography>
        </Box>
    );
};

const EncanadorPage = () => {
    useEffect(() => {
        setPageMeta({
            title: "Encanador Hidráulico",
            description:
                "Serviços de encanador hidráulico em Porto Alegre e região. Instalações, reparos e manutenções com equipe qualificada, agilidade e atendimento 24h.",
        });
    }, []);

    return (
        <>
            <PageHeader
                pageTitle="Encanador Hidráulico"
                overline="Instalações e reparos hidráulicos para residências, comércios e indústrias"
            />
            <Container>
                <ServiceWrapper>
                    <Content />
                </ServiceWrapper>
            </Container>
        </>
    );
};

export default EncanadorPage;
