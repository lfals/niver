import * as Yup from "yup";

export const loginInitialValues = {
    email: "",
    password: "",
};

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("O email é inválido")
        .required("O email é obrigatório"),
    password: Yup.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .required("A senha é obrigatória"),
});
