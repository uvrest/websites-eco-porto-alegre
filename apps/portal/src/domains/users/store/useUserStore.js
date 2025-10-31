import { create } from "zustand";
import { userService } from "../services/userService";

export const useUserStore = create((set, get) => ({

    // --- STATE ---
    users: [],
    selectedUser: null,
    isFetching: false,
    isSubmitting: false,

    // --- ACTIONS ---

    // Get a collection of users
    async fetchUsers(params = {}) {
        try {
            set({ isFetching: true });
            const data = await userService.getAll(params);
            set({ users: data });
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;
        } finally {
            set({ isFetching: false });
        }
    },

    // Get a specific user
    async fetchUser(id) {
        try {
            set({ isFetching: true });
            const data = await userService.getById(id);
            set({ selectedUser: data });
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw error;
        } finally {
            set({ isFetching: false });
        }
    },

    // Create a new user
    async createUser(payload) {
        try {
            set({ isSubmitting: true });
            const data = await userService.create(payload);

            // Atualiza lista local sem precisar refetch
            const users = get().users;
            set({ users: [...users, data] });

            return data;
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        } finally {
            set({ isSubmitting: false });
        }
    },

    // update an existing user
    async updateUser(id, payload) {
        try {
            set({ isSubmitting: true });
            const data = await userService.update(id, payload);

            // Atualiza item na lista local
            const users = get().users.map((u) => (u.id === id ? data : u));
            set({ users });

            return data;
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        } finally {
            set({ isSubmitting: false });
        }
    },

    // delete a specific user
    async deleteUser(id) {
        try {
            set({ isSubmitting: true });
            await userService.destroy(id);

            // Remove da lista local
            const users = get().users.filter((u) => u.id !== id);
            set({ users });
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            throw error;
        } finally {
            set({ isSubmitting: false });
        }
    },

    clearSelectedUser() {
        set({ selectedUser: null });
    },
}));