import { useEffect, useMemo, useState } from "react";

const DEFAULT_KEY = "uverest:color-mode";
const MODES = ["light", "dark", "system"];
const isValidMode = (m) => MODES.includes(m);

export function useColorMode(initialPreference = "system", { storageKey = DEFAULT_KEY } = {}) {

    //Define theme initial mode
    const initialMode = isValidMode(initialPreference) ? initialPreference : "system";

    const [selectedMode, setSelectedMode] = useState(() => {
        if (typeof window === "undefined") return initialMode;
        const stored = localStorage.getItem(storageKey);
        return isValidMode(stored) ? stored : initialMode;
    });


    //Verificamos se o usuário possui preferência de modo no seu navegador
    const getSystemMode = () => {
        if (typeof window === "undefined") return "light";
        return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Se usuário escolhe "system", resolvedMode segue o SO
    const resolvedMode = selectedMode === "system" ? getSystemMode() : selectedMode;

    // Persiste e sinaliza mudanças
    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.setItem(storageKey, selectedMode);
        window.dispatchEvent(
            new CustomEvent("color-scheme-change", { detail: { resolvedMode } })
        );
    }, [selectedMode, resolvedMode, storageKey]);

    // Reflect mode in DOM dataset
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.dataset.colorScheme = resolvedMode;
        }
    }, [resolvedMode]);

    // React to OS color-scheme changes when mode === "system"
    useEffect(() => {
        if (typeof window === "undefined" || selectedMode !== "system") return;
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
        const handler = () => {
            const mode = mq.matches ? "dark" : "light";
            document.documentElement.dataset.colorScheme = mode;
            window.dispatchEvent(new CustomEvent("color-scheme-change", { detail: { resolvedMode: mode } }));
        };
        if (!mq) return;
        mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
        return () =>
            mq.removeEventListener
                ? mq.removeEventListener("change", handler)
                : mq.removeListener(handler);
    }, [selectedMode]);

    // toggle: se estiver em 'system', fixa na preferência oposta à do SO
    const toggleColorMode = () => {
        setSelectedMode((prev) => {
            if (prev === "system") {
                const system = getSystemMode();
                return system === "dark" ? "light" : "dark";
            }
            return prev === "dark" ? "light" : "dark";
        });
    };

    return useMemo(
        () => ({
            selectedMode,
            resolvedMode,
            setSelectedMode,
            toggleColorMode,
        }),
        [selectedMode, resolvedMode]
    );
}