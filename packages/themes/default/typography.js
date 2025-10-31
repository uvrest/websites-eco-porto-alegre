// src/theme/typography.js
const headingFont = `'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`;
const bodyFont = `'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`;

const typography = {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontSize: 'clamp(2.5rem, 1.5rem + 2vw, 4rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em' },
    h2: { fontFamily: headingFont, fontSize: 'clamp(2rem, 1.2rem + 1.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.008em' },
    h3: { fontFamily: headingFont, fontSize: 'clamp(1.75rem, 1rem + 1.2vw, 2.5rem)', fontWeight: 700, lineHeight: 1.25 },
    h4: { fontFamily: headingFont, fontSize: 'clamp(1.5rem, 0.9rem + 1vw, 2rem)', fontWeight: 600, lineHeight: 1.3 },
    h5: { fontFamily: headingFont, fontSize: 'clamp(1.25rem, 0.8rem + 0.5vw, 1.5rem)', fontWeight: 600, lineHeight: 1.35 },
    h6: { fontFamily: headingFont, fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 },

    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.65 },
    subtitle1: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.6 },
    subtitle2: { fontSize: '0.9375rem', fontWeight: 500, lineHeight: 1.55 },

    button: { textTransform: 'none', fontWeight: 700, letterSpacing: '.015em' },
    overline: { fontFamily: headingFont, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' },
    caption: { fontSize: '0.8125rem', lineHeight: 1.4 },
};

export default typography;
