// CSS utilities for background patterns
import { alpha } from '@mui/material/styles';

export function gridPattern(theme, {
    size = 24, // grid spacing
    thickness = 1, // line thickness
    color, // base color (default: primary.main)
    opacity = theme.palette.mode === 'dark' ? 0.18 : 0.12,
} = {}) {
    const base = color || theme.palette.primary.main;
    const line = alpha(base, opacity);
    return {
        backgroundImage: `linear-gradient(to right, ${line} ${thickness}px, transparent ${thickness}px), linear-gradient(to bottom, ${line} ${thickness}px, transparent ${thickness}px)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: '0 0',
    };
}

export function dotsPattern(theme, {
    size = 22, // distance between dots
    dot = 2, // dot radius
    color,
    opacity = theme.palette.mode === 'dark' ? 0.22 : 0.16,
} = {}) {
    const base = color || theme.palette.primary.main;
    const c = alpha(base, opacity);
    return {
        backgroundImage: `radial-gradient(${c} ${dot}px, transparent ${dot + 0.01}px)`,
        backgroundSize: `${size}px ${size}px`,
    };
}

export function crossPattern(theme, {
    size = 26,
    thickness = 1,
    color,
    opacity = theme.palette.mode === 'dark' ? 0.18 : 0.12,
} = {}) {
    const base = color || theme.palette.primary.main;
    const line = alpha(base, opacity);
    return {
        backgroundImage: `linear-gradient(${line} ${thickness}px, transparent ${thickness}px), linear-gradient(90deg, ${line} ${thickness}px, transparent ${thickness}px)`,
        backgroundSize: `${size}px ${size}px`,
    };
}
