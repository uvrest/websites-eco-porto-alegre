import * as yup from 'yup';

/* LOGIN */
export const loginSchema = yup.object().shape({
    email: yup.string().email('Formato de e-mail inválido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
});

export const loginDefaultValues = {
    email: "gabriel@uverest.com.br",
    password: "123456",
};