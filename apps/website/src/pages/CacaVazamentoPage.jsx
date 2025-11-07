import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServiceWrapper from "@website/wrappers/ServiceWrapper";
import mainImage from "@website/assets/images/services/leak-detection-1.png"

const CacaVazamentoContent = () => {
    return (
        <Box
            component="article"
            pb={5}
        >
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
                    alt="Serviço de caça vazamento em Porto Alegre"
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
                Evite o quebra-quebra e descubra vazamentos com tecnologia de ponta
            </Typography>

            <Typography component="h2" variant="h3" color="primary" mb={3}>
                Serviços de Caça Vazamentos
            </Typography>

            <Typography paragraph>
                A <strong>Eco Porto Alegre</strong> é especialista em <strong>detecção
                    de vazamentos de água</strong> sem a necessidade de quebrar pisos,
                paredes ou tubulações. Utilizamos <strong>equipamentos eletrônicos de
                    precisão</strong> que identificam o ponto exato do vazamento, evitando
                desperdício de água e reduzindo custos com reparos.
            </Typography>

            <Typography paragraph>
                Nosso serviço é indicado para <strong>residências, condomínios,
                    comércios e indústrias</strong> que enfrentam aumento inesperado na
                conta de água, infiltrações, manchas de umidade ou ruídos nas
                tubulações. Através de métodos não destrutivos, conseguimos localizar
                com rapidez a origem do problema e orientar o reparo de forma segura e
                eficiente.
            </Typography>

            <Typography paragraph>
                Trabalhamos com <strong>equipamentos modernos de geofonamento,
                    correlacionadores e câmeras térmicas</strong>, que nos permitem atuar em
                redes hidráulicas internas, externas e subterrâneas. Nosso compromisso é
                oferecer um <strong>atendimento ágil, técnico e sem sujeira</strong>,
                disponível 24 horas em <strong>Porto Alegre e Região Metropolitana</strong>.
            </Typography>

            <Typography paragraph>
                Evite prejuízos e desperdícios de água — conte com a Eco Porto Alegre
                para uma <strong>detecção precisa e sem dor de cabeça</strong>. Entre em
                contato e agende uma visita com nossa equipe especializada.
            </Typography>
        </Box>
    )
}

const CacaVazamentoPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Caça Vazamentos",
            description: "Serviços profissionais de caça vazamentos em Porto Alegre e Região Metropolitana. Localização precisa sem quebra-quebra, com tecnologia eletrônica e atendimento 24h.",
        });
    }, []);

    return (
        <>
            <PageHeader pageTitle="Caça Vazamentos" overline="Detecção precisa de vazamentos sem quebra-quebra" />
            <Container>
                <ServiceWrapper>
                    <CacaVazamentoContent />
                </ServiceWrapper>
            </Container>
        </>
    )
}

export default CacaVazamentoPage;