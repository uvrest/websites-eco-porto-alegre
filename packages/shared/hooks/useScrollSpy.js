// packages/shared/hooks/useScrollSpy.js
import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook para observar qual seção está visível na viewport.
 * @param {string[]} ids - lista de ids das seções (sem "#")
 * @param {number} offset - margem superior para considerar ativo
 * @returns {string} - id ativo atualmente
 */
const useScrollSpy = (ids = [], offset = 80) => {

    const [activeId, setActiveId] = useState("");
    const observersRef = useRef([]);

    const handleIntersect = useCallback((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (visible.length > 0) {
            const topMost = visible.reduce((prev, current) =>
                prev.boundingClientRect.top < current.boundingClientRect.top
                    ? prev
                    : current
            );
            setActiveId(topMost.target.id);
        } else {
            setActiveId("");
        }
    }, []);


    useEffect(() => {
        // limpa observers antigos
        observersRef.current.forEach((o) => o.disconnect());
        observersRef.current = [];

        if (!ids.length) return;

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(handleIntersect, {
                rootMargin: `-${offset}px 0px 0px 0px`,
                threshold: 0.5,
            });

            observer.observe(el);
            observersRef.current.push(observer);
        });

        return () => {
            observersRef.current.forEach((o) => o.disconnect());
            observersRef.current = [];
        };
    }, [ids, offset, handleIntersect]);

    return activeId;
}

export default useScrollSpy;

