// portal/src/config/env.js
import { cleanEnv, url, bool, str } from "envalid";

export const env = cleanEnv(import.meta.env, {
    VITE_APP_NAME: str({ default: "Uverest Portal Template" }),
    VITE_API_URL: url({ default: "http://127.0.0.1:8000/api" }),
    VITE_STORAGE_URL: url({ default: "http://127.0.0.1:8000/storage" }),
    VITE_BASE_PATH: str({ default: "/" }), // basename e base do Vite
    VITE_ENABLE_OBSERVABILITY: bool({ default: false }),
}, { strict: false });