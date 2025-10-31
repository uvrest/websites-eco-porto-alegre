import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

/**
 * Hook para restaurar o scroll em mudanças de rota.
 * - PUSH/REPLACE: rola para o topo (smooth se permitido)
 * - POP (voltar/avançar): preserva scroll do navegador
 * - Hash (#ancora): tenta focar o elemento alvo
 */
export function useScrollRestoration() {

    const { pathname, hash } = useLocation();
    const navType = useNavigationType(); // "PUSH" | "REPLACE" | "POP"

    useEffect(() => {
        // Âncora: tentar rolar até o elemento
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                return;
            }
        }

        // Em navegações normais, sobe ao topo; em POP, preserve
        if (navType === "PUSH" || navType === "REPLACE") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [pathname, hash, navType]);
}
