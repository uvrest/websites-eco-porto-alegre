// src/layouts/dashboard-layout/configs/config.jsx
export const LAYOUT_CONFIG = {
    drawerWidth: 300,
    collapsedDrawerWidth: 90,
    layoutTransitionDuration: '0.3s', // Duração de animações do sidebar
    logoSize: { default: 195, collapsed: 45 },
    avatarSize: 32,
    sidebar: {
        denseMode: false,
    },
    getAppBarHeight: (theme, isMobile) => (isMobile ? theme.spacing(7) : theme.spacing(8)),
};