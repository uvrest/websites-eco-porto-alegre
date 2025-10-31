import { create } from "zustand";
import { authService } from "../services/authService";
import { localStorageUtils } from "@uverest/utils/local-storage";

export const useAuthStore = create((set) => ({

    // --- STATE ---
    user: localStorageUtils.get("portal-user"),
    token: localStorageUtils.get("portal-auth-token"),
    isAuthenticated: !!localStorageUtils.get("portal-auth-token"),
    isSubmitting: false,

    //Actions
    login: async (credentials) => {

        set({ isSubmitting: true });

        try {
            const res = await authService.login(credentials);

            if (res.success) {
                const { user, token } = res.data;
                console.log(res.data, user, token);
                localStorageUtils.set("portal-user", user);
                localStorageUtils.set("portal-auth-token", token);

                set({ user: user, token: token, isAuthenticated: true });
            }

            return res; // retorna sempre o padrão { success, message, data? }

        } catch (error) {
            console.error("Erro inesperado no login:", error);
            return { success: false, message: "Erro inesperado no login." };
        } finally {
            set({ isSubmitting: false });
        }
    },

    logout: async () => {
        try {
            await authService.logout();
        } catch (error) {
            console.warn("Erro no logout (ignorável):", error);
        } finally {
            localStorageUtils.remove("portal-user");
            localStorageUtils.remove("portal-auth-token");
            set({
                user: null,
                token: null,
                isAuthenticated: false,
            });
        }
    },

}));