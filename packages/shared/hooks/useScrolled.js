import { useState, useRef, useEffect } from "react";

/**
 * Detecta se o scroll passou de um threshold (px).
 * Por padrão observa o window, mas pode observar um container scrollável (ref).
 */
export const useScrolled = (threshold = 80, containerRef = null) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        // SSR-safe
        const hasWindow = typeof window !== "undefined";
        const target = (containerRef && containerRef.current) || (hasWindow ? window : null);
        if (!target) return;

        const getScrollTop = () =>
            target === window
                ? (window.scrollY ?? window.pageYOffset ?? 0)
                : target.scrollTop;

        const onScroll = () => setScrolled(getScrollTop() > threshold);

        // estado inicial
        onScroll();

        // listener no ALVO correto (window OU container)
        target.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            target.removeEventListener("scroll", onScroll);
        };

    }, [threshold, containerRef?.current]);

    return scrolled;
}