import axios from "axios";

export const createApiConnection = (apiUrl, token = null) => {

    if (!apiUrl) throw new Error("createApiConnection: apiUrl is required.");

    const api = axios.create({ baseURL: apiUrl });

    // Headers padrão
    api.defaults.headers["Content-Type"] = "application/json";
    api.defaults.headers["Accept"] = "application/json";

    // Intercepta requests antes de sair
    api.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("➡️ Request interceptada para:", config.url);
        return config;
    });


    // Intercepta respostas antes de chegar
    api.interceptors.response.use(
        (response) => {
            console.log("✅ Response interceptada:", response.status);
            return response;
        },
        (error) => {
            console.log("❌ Response interceptada com erro:", error.response?.status);
            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                // window.location.href = "/auth/login"; // Uncomment later
            }
            return Promise.reject(error);
        }
    );

    // Modo multipart
    const setMultipartMode = (isMultipart = false) => {
        api.defaults.headers["Content-Type"] = isMultipart
            ? "multipart/form-data"
            : "application/json";
    };

    return { api, setMultipartMode };
}