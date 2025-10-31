import { createApiConnection } from "@uverest/utils/api";
import { handleApiResponse } from "@uverest/utils/api-helpers";
import { env } from "@portal/app/config/env";

const { api } = createApiConnection(env.VITE_API_URL);

export const authService = {

    //Login
    async login(credentials) {
        const response = await handleApiResponse(() => api.post("/login", credentials), "Login efetuado com sucesso!");
        return response.success ? { ...response, data: response.data.data } : response;
    },

    //Logout
    async logout() {
        return handleApiResponse(() => api.post("/logout"), "Logout realizado com sucesso!");
    },
}