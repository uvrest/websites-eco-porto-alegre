/**
 * Faz scroll suave até um elemento com id fornecido
 * @param {string} hash - Ex: "#faq" ou "faq"
 */
export const scrollTo = (hash) => {
    if (!hash) return;

    const targetId = hash.replace("#", "");
    const el = document.getElementById(targetId);

    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    } else {
        console.warn(`scrollToId: elemento #${targetId} não encontrado.`);
    }
};
