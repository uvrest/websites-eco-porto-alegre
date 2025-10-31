import { Button, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";

/**
 * CtaButton - Botão reutilizável para CTAs
 * 
 * @param {string} label - Texto do botão
 * @param {"contained" | "outlined" | "text"} [variant="contained"] - Variante visual
 * @param {"primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning"} [color="primary"] - Cor do botão
 * @param {"small" | "medium" | "large"} [size="medium"] - Tamanho
 * @param {string} [href] - Link externo
 * @param {string} [to] - Link interno (react-router)
 * @param {string} [target] - Target do link (ex: "_blank")
 * @param {ReactNode} [icon] - Ícone opcional
 * @param {"start" | "end"} [iconPosition="start"] - Posição do ícone
 * @param {boolean} [fullWidth=false] - Ocupa toda a largura
 */
const CtaButton = ({
    label,
    variant = "contained",
    color = "primary",
    size = "medium",
    href,
    to,
    target,
    icon,
    iconPosition = "start",
    fullWidth = false,
    ...props
}) => {
    // Decide se será <a>, <Link> ou <button>
    const componentProps = {};

    if (href) {
        componentProps.component = MuiLink;
        componentProps.href = href;
        if (target) componentProps.target = target;
        componentProps.rel = "noopener noreferrer";
    } else if (to) {
        componentProps.component = RouterLink;
        componentProps.to = to;
    }

    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            startIcon={icon && iconPosition === "start" ? icon : undefined}
            endIcon={icon && iconPosition === "end" ? icon : undefined}
            {...componentProps}
            {...props}
        >
            {label}
        </Button>
    );
};

export default CtaButton;
