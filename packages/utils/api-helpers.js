// packages/utils/api-helpers.js

/**
 * Wrapper para padronizar respostas de chamadas Axios (ou Promises)
 * Retorna sempre: { success, data, message, error }
 *
 * @param {Function} fn - Função async que retorna uma Promise (geralmente api.get/post)
 * @param {string} successMessage - Mensagem padrão de sucesso (opcional)
 * @param {string} defaultErrorMessage - Mensagem padrão de erro (opcional)
 */
export async function handleApiResponse(
    fn,
    successMessage = "Operação realizada com sucesso.",
    defaultErrorMessage = "Ocorreu um erro inesperado."
) {
    try {
        const response = await fn();

        return {
            success: true,
            data: response.data ?? null,
            message: response.data?.message || successMessage,
        };
    } catch (error) {
        const status = error.response?.status;
        const message =
            error.response?.data?.message ||
            (status === 401
                ? "Credenciais inválidas, tente novamente."
                : status === 404
                    ? "Recurso não encontrado."
                    : defaultErrorMessage);

        return {
            success: false,
            message,
            error: error.response?.data || error.message,
            status,
        };
    }
}
