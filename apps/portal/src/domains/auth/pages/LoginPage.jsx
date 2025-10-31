import { Link } from "react-router";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <Box sx={{ maxWidth: '75%' }}>

            <Box mb={4}>
                <Typography variant="h2" textAlign='center'>
                    Faça o seu login
                </Typography>
                <Typography variant="body1" textAlign='center' mt={1}>
                    Não possui conta? <MuiLink component={Link} to='/auth/cadastro'>Cadastre-se</MuiLink>
                </Typography>
            </Box>

            {/**Login form */}
            <LoginForm />

        </Box>
    )
}

export default LoginPage;