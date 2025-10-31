// packages/utils/local-storage.js

/**
 * Wrapper seguro para o localStorage
 * Evita erros de JSON.parse e garante fallback seguro.
 */

export const localStorageUtils = {

    /**
     * Obtém um item do localStorage e faz JSON.parse se possível
     * @param {string} key - Chave do item
     * @param {any} fallback - Valor retornado se não existir
     */
    get(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            console.warn(`[localStorageUtils] Erro ao parsear "${key}":`, error);
            return fallback;
        }
    },

    /**
     * Define um item (automaticamente faz JSON.stringify)
     * @param {string} key - Chave
     * @param {any} value - Valor a salvar
     */
    set(key, value) {
        console.log(key, value);
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`[localStorageUtils] Erro ao salvar "${key}":`, error);
        }
    },

    /**
     * Remove um item do localStorage
     * @param {string} key - Chave do item
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`[localStorageUtils] Erro ao remover "${key}":`, error);
        }
    },

    /**
     * Limpa todo o localStorage
     */
    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("[localStorageUtils] Erro ao limpar o localStorage:", error);
        }
    },
};