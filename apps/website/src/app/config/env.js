import { cleanEnv, url, bool, str } from "envalid";

export const env = cleanEnv(import.meta.env, {
    VITE_APP_NAME: str({ default: "Eco Porto Alegre" }),
    VITE_API_URL: url({ default: "http://localhost:8000" }),
    VITE_BASE_PATH: str({ default: "/" }), // basename e base do Vite
    VITE_ENABLE_OBSERVABILITY: bool({ default: false }),
}, { strict: false });