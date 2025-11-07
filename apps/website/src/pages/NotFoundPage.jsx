import { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import { useNavigate } from "react-router";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setPageMeta({
            title: "Página não encontrada | Eco Porto Alegre",
            description:
                "A página que você tentou acessar não existe ou foi removida. Volte para o início e continue navegando pelo site da Eco Porto Alegre.",
        });
    }, []);

    return (
        <>
            <PageHeader pageTitle="404" overline="Página não encontrada" />
            <Container sx={{ py: 8 }}>
                <Box
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "40vh" }}
                >
                    <ErrorOutlineRoundedIcon
                        color="warning"
                        sx={{ fontSize: 100, mb: 2, opacity: 0.8 }}
                    />

                    <Typography variant="h3" color="primary" fontWeight={700} mb={1}>
                        Ops! Página não encontrada
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 600, mb: 4 }}
                    >
                        A página que você tentou acessar pode ter sido removida,
                        renomeada ou está temporariamente indisponível.
                        Retorne para a página inicial e continue navegando pelo site da{" "}
                        <strong>Eco Porto Alegre</strong>.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate("/")}
                        sx={{ px: 4, py: 1.5 }}
                    >
                        Voltar para a Home
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default NotFoundPage;