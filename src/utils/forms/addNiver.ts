import * as Yup from "yup";

const urlRegex =
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const niverInitialValues = {
    avatar: "",
    name: "",
    birthdate: "",
    tag: "",
    description: "",
    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
        whatsapp: "",
        email: "",
    },
};

export const niverValidationSchema = Yup.object({
    name: Yup.string()
        .min(5, "O nome deve ter no mínimo 5 caracteres")
        .max(192, "O nome deve ter no máximo 192 caracteres")
        .required("O nome é obrigatório"),
    birthdate: Yup.string().required("A data de nascimento é obrigatória"),
    tag: Yup.string().required("A categoria é obrigatória"),
    description: Yup.string().max(
        192,
        "A descrição deve ter no máximo 192 caracteres"
    ),
    social: Yup.object({
        facebook: Yup.string().matches(
            urlRegex,
            "A URL do Facebook é inválida"
        ),
        instagram: Yup.string().matches(
            urlRegex,
            "A URL do Instagram é inválida"
        ),
        linkedin: Yup.string().matches(
            urlRegex,
            "A URL do Linkedin é inválida"
        ),
        whatsapp: Yup.string()
            .min(14, "O número do Whatsapp é inválido")
            .max(15, "O número do Whatsapp é inválido"),
        email: Yup.string().email("O email é inválido"),
    }),
});

export const validateAvatarSize = (base64: string) => {
    const fileSize = Math.round((base64.length * (3 / 4) - 1) / 1024);
    return !(fileSize > 2048);
};
