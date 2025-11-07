import { Typography, Breadcrumbs as MUIBreadcrumbs, Link as MuiLink } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router";

// Converte slug em texto legível ("caca-vazamento" → "Caça Vazamento")
const unslugify = (slug) => {
    if (!slug) return "";
    return slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <MUIBreadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
                mb: 1,
                "& a": { fontWeight: 500 },
                "& .MuiTypography-root": { fontWeight: 400 },
            }}
        >
            <MuiLink
                component={RouterLink}
                underline="hover"
                to="/"
                color="#f0f0f0"
            >
                Início
            </MuiLink>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const label = unslugify(decodeURIComponent(value));
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Typography key={to} color="#d0d0d0">
                        {label}
                    </Typography>
                ) : (
                    <MuiLink
                        key={to}
                        component={RouterLink}
                        underline="hover"
                        color="#f0f0f0"
                        to={to}
                    >
                        {label}
                    </MuiLink>
                );
            })}
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;