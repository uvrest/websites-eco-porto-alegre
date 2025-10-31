import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { Box, Grid, TextField, Button, InputAdornment, IconButton, CircularProgress, Link as MuiLink } from "@mui/material";
import { Visibility, VisibilityOff, EmailOutlined, VpnKeyOutlined, LoginOutlined } from "@mui/icons-material";
import { loginSchema, loginDefaultValues } from "../validations/schemas";
import { useAuthStore } from "../store/useAuthStore";
import { useSnackbar } from "@uverest/design-system/contexts/SnackbarContext";

const LoginForm = () => {

    const { showSnackbar } = useSnackbar();
    const { login, isSubmitting } = useAuthStore();
    const navigate = useNavigate();

    {/** Password Visibility */ }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { control, handleSubmit } = useForm({
        defaultValues: loginDefaultValues,
        resolver: yupResolver(loginSchema),
        mode: 'onBlur',
    });

    const handleLogin = async (formData) => {
        if (!formData) return;

        const response = await login(formData);

        if (response.success) {
            showSnackbar(response.message, "success");
            navigate("/portal");
        } else {
            showSnackbar(response.message, "error");
        }
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} noValidate>
            <Grid container spacing={2}>

                <Grid size={{ xs: 12 }}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { ref, ...rest }, fieldState: { error } }) => {
                            return (
                                <TextField
                                    {...rest}
                                    fullWidth
                                    label="E-mail"
                                    inputRef={ref}
                                    error={!!error}
                                    helperText={!!error ? error?.message : ''}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailOutlined />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            );
                        }}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { ref, ...rest }, fieldState: { error } }) => {
                            return (
                                <TextField
                                    {...rest}
                                    inputRef={ref}
                                    fullWidth
                                    label="Senha"
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!error}
                                    helperText={!!error ? error?.message : ''}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VpnKeyOutlined />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end" >
                                                    <IconButton
                                                        aria-label={
                                                            showPassword ? 'Esconder senha' : 'Mostrar senha'
                                                        }
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            );
                        }}
                    />
                </Grid>

                <Box
                    flexGrow={1}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    mt={1}
                >

                    {/* Forgot Password Link */}
                    <MuiLink
                        component={Link}
                        to="/auth/recuperar-senha"
                        variant="body2"
                    >
                        Esqueceu a sua senha?
                    </MuiLink>

                    {/* Submit button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        startIcon={isSubmitting && <CircularProgress size={18} />}
                        endIcon={<LoginOutlined />}
                    >
                        {isSubmitting ? 'Entrando...' : 'Fazer Login'}
                    </Button>

                </Box>

            </Grid>
        </form>
    )
}

export default LoginForm;