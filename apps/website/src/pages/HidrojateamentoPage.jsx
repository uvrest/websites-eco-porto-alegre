import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/hidrojateamento.jpeg";

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
                    alt="Serviço de hidrojateamento em Porto Alegre"
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
                Desobstrução e limpeza com tecnologia de alta pressão
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Hidrojateamento de Alta Pressão
            </Typography>

            <Typography paragraph>
                O <strong>hidrojateamento</strong> é uma das técnicas mais eficientes
                para a <strong>limpeza e desobstrução de tubulações, galerias pluviais,
                    redes de esgoto e caixas d’água</strong>. A <strong>Eco Porto Alegre</strong>
                utiliza equipamentos modernos que aplicam jatos de água em alta pressão,
                removendo incrustações, gorduras e resíduos sólidos sem danificar as
                estruturas.
            </Typography>

            <Typography paragraph>
                Esse método é totalmente <strong>não agressivo e sustentável</strong>,
                dispensando o uso de produtos químicos. É indicado para{" "}
                <strong>indústrias, condomínios, comércios e residências</strong> que
                buscam uma solução rápida, limpa e eficiente para entupimentos
                recorrentes ou manutenção preventiva de redes hidráulicas.
            </Typography>

            <Typography paragraph>
                Além da desobstrução, o hidrojateamento é amplamente utilizado para a{" "}
                <strong>limpeza técnica de superfícies, tanques e tubulações industriais</strong>,
                garantindo o fluxo adequado e aumentando a vida útil das instalações.
            </Typography>

            <Typography paragraph>
                A equipe da <strong>Eco Porto Alegre</strong> é treinada para operar os
                equipamentos de forma segura e precisa, atendendo{" "}
                <strong>24 horas por dia</strong> em Porto Alegre e Região Metropolitana.
                Nossos serviços seguem todas as normas de segurança e meio ambiente,
                proporcionando resultados superiores e sem danos às estruturas.
            </Typography>
        </Box>
    );
};

const HidrojateamentoPage = () => {
    useEffect(() => {
        setPageMeta({
            title: "Hidrojateamento de Alta Pressão | Eco Porto Alegre",
            description:
                "Serviços de hidrojateamento em Porto Alegre e Região Metropolitana. Limpeza e desobstrução de redes e tubulações com jato de alta pressão e tecnologia sustentável.",
        });
    }, []);

    return (
        <>
            <PageHeader
                pageTitle="Hidrojateamento"
                overline="Limpeza e desobstrução de tubulações com jato de alta pressão"
            />
            <Container>
                <ServiceWrapper>
                    <Content />
                </ServiceWrapper>
            </Container>
        </>
    );
};

export default HidrojateamentoPage;