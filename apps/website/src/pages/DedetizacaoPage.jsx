import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/dedetizacao.png";

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
                    alt="Serviço de dedetização e controle de pragas em Porto Alegre"
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
                Soluções eficazes e seguras para eliminar pragas com responsabilidade ambiental
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Dedetização e Controle de Pragas Urbanas
            </Typography>

            <Typography paragraph>
                A <strong>Eco Porto Alegre</strong> oferece serviços profissionais de{" "}
                <strong>dedetização e controle de pragas urbanas</strong>, utilizando
                produtos certificados pela <strong>Anvisa</strong> e técnicas seguras
                para eliminar <strong>insetos, roedores e outras infestações</strong>
                que comprometem a saúde e o bem-estar de pessoas, animais e ambientes.
            </Typography>

            <Typography paragraph>
                Atendemos <strong>residências, condomínios, comércios, restaurantes e indústrias</strong>,
                sempre com foco na eficácia do tratamento e na segurança dos ocupantes.
                Realizamos controle de pragas como <strong>baratas, formigas, cupins,
                    mosquitos, pulgas, traças e ratos</strong>, utilizando métodos adequados
                a cada tipo de infestação.
            </Typography>

            <Typography paragraph>
                Nossos técnicos são capacitados e seguem protocolos de segurança e meio
                ambiente, aplicando as soluções de forma precisa, sem causar danos às
                superfícies nem deixar odores fortes. Também oferecemos{" "}
                <strong>planos de manutenção preventiva</strong>, garantindo ambientes
                limpos e protegidos ao longo do tempo.
            </Typography>

            <Typography paragraph>
                Com a <strong>Eco Porto Alegre</strong>, você tem a certeza de um serviço{" "}
                <strong>eficiente, discreto e sustentável</strong>, com{" "}
                <strong>atendimento 24 horas</strong> em Porto Alegre e Região
                Metropolitana. Livre-se das pragas com segurança e responsabilidade.
            </Typography>
        </Box>
    );
};

const DedetizacaoPage = () => {
    useEffect(() => {
        setPageMeta({
            title: "Dedetização e Controle de Pragas | Eco Porto Alegre",
            description:
                "Serviços de dedetização e controle de pragas em Porto Alegre e Região Metropolitana. Produtos certificados pela Anvisa, segurança, eficiência e atendimento 24h.",
        });
    }, []);

    return (
        <>
            <PageHeader
                pageTitle="Dedetização e Controle de Pragas Urbanas"
                overline="Eliminação de insetos e roedores com segurança e responsabilidade ambiental"
            />
            <Container>
                <ServiceWrapper>
                    <Content />
                </ServiceWrapper>
            </Container>
        </>
    );
};

export default DedetizacaoPage;