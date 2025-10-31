// src/layouts/dashboard-layout/helpers.js
export const getTopBarWidth = (isMobile, isSidebarCollapsed, drawerWidth, collapsedDrawerWidth) => {
    if (isMobile) return "100%";
    return isSidebarCollapsed ? `calc(100% - ${collapsedDrawerWidth}px)` : `calc(100% - ${drawerWidth}px)`;
};