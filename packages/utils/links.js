// packages/utils/links.js
export const isHashLink = (link = "") => {
    // "#id" com letras, números, "_" ou "-"
    return /^#[a-zA-Z0-9_-]+$/.test(link);
};

export const isNavLink = (link = "") => {
    // começa com "/" mas não com "//" (evita "http://")
    return /^\/(?!\/).*/.test(link);
};

export const isExternalLink = (link = "") => {
    // http(s):// , mailto: ou tel:
    return /^(https?:\/\/|mailto:|tel:)/i.test(link);
};