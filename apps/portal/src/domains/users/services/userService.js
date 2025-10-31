import { createApiConnection } from "@uverest/utils/api";
import { env } from "@portal/app/config/env";

// Cria conexão da API (cada app tem seu env)
const { api, setMultipartMode } = createApiConnection(env.VITE_API_URL);

export const userService = {

    // Busca todos os usuários (com filtros/paginação opcionais)
    async getAll(params = {}) {
        const response = await api.get("/users", { params });
        return response.data;
    },

    // Busca um usuário pelo ID
    async getById(id) {
        const response = await api.get(`/users/${id}`);
        return response.data;
    },

    // Cria um novo usuário
    async create(payload) {
        const response = await api.post("/users", payload);
        return response.data;
    },

    // Atualiza um usuário existente
    async update(id, payload) {
        const response = await api.put(`/users/${id}`, payload);
        return response.data;
    },

    // Exclui um usuário
    async destroy(id) {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    },

    // Upload de avatar (exemplo com multipart)
    async uploadAvatar(id, file) {
        setMultipartMode(true);
        const formData = new FormData();
        formData.append("avatar", file);
        const response = await api.post(`/users/${id}/avatar`, formData);
        setMultipartMode(false); // volta pro modo normal
        return response.data;
    },
}