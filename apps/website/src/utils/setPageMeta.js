// apps/website/src/app/utils/setPageMeta.js
import { env } from "@website/app/config/env";

export const setPageMeta = ({ title, description } = {}) => {
    const base = env.VITE_APP_NAME;
    document.title = title ? `${title} · ${base}` : base;

    if (description) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", description);
    }
}
