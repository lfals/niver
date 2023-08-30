import * as Yup from "yup";

export const registerInitialValues = {
    name: "",
    email: "",
    password: "",
};

export const registerValidationSchema = Yup.object({
    name: Yup.string()
        .required("O nome é obrigatório")
        .matches(/^[a-zA-Z\u00C0-\u017F\s]+$/, "Somente letras são permitidas"),
    email: Yup.string()
        .email("O email é inválido")
        .required("O email é obrigatório"),
    password: Yup.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .required("A senha é obrigatória"),
});
