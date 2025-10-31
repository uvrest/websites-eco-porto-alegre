import { Box, Typography, Stack, Link as MuiLink } from "@mui/material";
import { Outlet, Link } from "react-router";
import Brand from "@portal/app/components/brand/Brand";

const LayoutWrapper = ({ children }) => {
    return (
        <Box
            sx={(theme) => ({
                background: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'row',
                minHeight: '100dvh',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                },
            })}
        >
            {children}
        </Box>
    )
}

const BackgroundContainer = ({ children }) => {
    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                display: 'flex',
                width: '45%',
                minHeight: '100dvh',
                height: '100%',
                backgroundColor: theme.palette.primary.dark,
                justifyContent: 'center',
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                    height: '30vh',
                    width: '100%',
                },
            })}
        >
            {children}
        </Box>
    )
}

const ContentContainer = ({ children }) => {
    return (
        <Box
            sx={(theme) => ({
                background: theme.palette.background.paper,
                minHeight: '100dvh',
                height: '100%',
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(4),
                [theme.breakpoints.down('md')]: {
                    minHeight: '50dvh',
                    padding: theme.spacing(2),
                },
            })}
        >
            {children}
        </Box>
    );
}

const bottomMenuItems = [
    { label: 'voltar ao site', path: '/' },
    { label: 'políticas de privacidade', path: null },
    { label: 'suporte', path: null },
];

const AuthLayout = () => {
    return (
        <LayoutWrapper>
            <BackgroundContainer>
                <Box
                    sx={{
                        width: '380px',
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Brand height={74} />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        mt: "auto",
                        gap: 1,
                        py: 3,
                        px: 4,
                    }}
                >
                    <Stack
                        direction='row'
                        spacing={{ xs: 1, md: 2, }}
                    >
                        {bottomMenuItems.map((item, index) => {
                            return (
                                <MuiLink
                                    component={Link}
                                    key={index}
                                    to={item.path}
                                    variant="body2"
                                    color="#FBF5F3"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    {item.label}
                                </MuiLink>
                            )
                        })}
                    </Stack>
                    <Typography variant="body2" color="#FBF5F3">
                        © 2025 Synthesys
                    </Typography>
                </Box>
            </BackgroundContainer>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </LayoutWrapper>
    )
}

export default AuthLayout;