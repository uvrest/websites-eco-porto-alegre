import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/limpa-fossa.jpg";

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
                    alt="Serviço de limpeza e sucção de fossas em Porto Alegre"
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
                Limpeza segura, rápida e ambientalmente responsável
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Limpeza e Sucção de Fossas
            </Typography>

            <Typography paragraph>
                A <strong>Eco Porto Alegre</strong> realiza serviços completos de{" "}
                <strong>limpeza, sucção e transporte de resíduos de fossas sépticas e
                    caixas de gordura</strong>, atendendo residências, condomínios,
                comércios e indústrias com responsabilidade ambiental e técnica
                especializada.
            </Typography>

            <Typography paragraph>
                Utilizamos <strong>equipamentos de alta capacidade e caminhões a vácuo</strong> que garantem
                uma sucção eficiente e sem vazamentos, mantendo o local limpo e seguro
                após a execução. Todos os resíduos coletados são destinados de forma
                correta a estações de tratamento credenciadas, em conformidade com as{" "}
                <strong>normas ambientais vigentes</strong>.
            </Typography>

            <Typography paragraph>
                A manutenção periódica de fossas e caixas de gordura é essencial para
                evitar entupimentos, transbordamentos e mau cheiro. Nossos técnicos
                realizam a limpeza de forma ágil, sem danificar estruturas e com total
                respeito ao meio ambiente.
            </Typography>

            <Typography paragraph>
                Conte com a <strong>Eco Porto Alegre</strong> para um{" "}
                <strong>atendimento rápido, seguro e disponível 24 horas</strong> em
                Porto Alegre e Região Metropolitana. Garantimos eficiência, higiene e
                destinação adequada de todos os resíduos.
            </Typography>
        </Box>
    );
};

const LimpaFossaPage = () => {
    useEffect(() => {
        setPageMeta({
            title: "Limpeza e Sucção de Fossas | Eco Porto Alegre",
            description:
                "Serviços profissionais de limpeza e sucção de fossas em Porto Alegre e Região Metropolitana. Caminhões a vácuo, destinação correta de resíduos e atendimento 24h.",
        });
    }, []);

    return (
        <>
            <PageHeader
                pageTitle="Limpeza e Sucção de Fossas"
                overline="Serviços seguros e sustentáveis para fossas sépticas e caixas de gordura"
            />
            <Container>
                <ServiceWrapper>
                    <Content />
                </ServiceWrapper>
            </Container>
        </>
    );
};

export default LimpaFossaPage;