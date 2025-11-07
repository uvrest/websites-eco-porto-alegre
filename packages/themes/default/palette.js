// packages/themes/default/palette.js
import { darken, lighten } from '@mui/material/styles';

const makeColor = (mainColor, contrastText = '#fff') => ({
    main: mainColor,
    light: lighten(mainColor, 0.2), //0.2 default
    dark: darken(mainColor, 0.25), //0.25 default
    contrastText: contrastText,
});

const lightText = {
    primary: '#111827',
    secondary: 'rgba(0,0,0,0.5)',
};

const darkText = {
    primary: '#E5E7EB',
    secondary: 'rgba(255,255,255,0.7)',
};

export default {
    light: {
        mode: 'light',
        primary: makeColor('#1736ff'),
        secondary: makeColor('#EF5D42'),
        neutral: makeColor('#2C3449'),
        background: { default: '#FCF1F3', paper: '#FBF5F3' },
        text: lightText,
        divider: 'rgba(0,0,0,0.12)',
        action: {
            hoverOpacity: 0.08,
            selectedOpacity: 0.12,
            disabledOpacity: 0.38,
            focusOpacity: 0.16,
            activatedOpacity: 0.12,
        },
        error: makeColor('#EF4444'),
        warning: makeColor('#F59E0B'),
        info: makeColor('#0EA5E9'),
        success: makeColor('#10B981'),
    },
    dark: {
        mode: 'dark',
        primary: makeColor('#EF5D42'),
        secondary: makeColor('#1736ff'),
        neutral: makeColor('#2C3449'),
        background: { default: '#000011', paper: '#000022' },
        text: darkText,
        divider: 'rgba(255,255,255,0.12)',
        action: {
            hoverOpacity: 0.08,
            selectedOpacity: 0.16,
            disabledOpacity: 0.38,
            focusOpacity: 0.16,
            activatedOpacity: 0.24,
        },
        error: makeColor('#EF4444'),
        warning: makeColor('#F59E0B'),
        info: makeColor('#0EA5E9'),
        success: makeColor('#10B981'),
    },
};
