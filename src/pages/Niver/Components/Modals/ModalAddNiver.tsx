import { NiverContext } from "../../../../context/NiverContext";
import { useContext } from "react";
import { useFormik } from "formik";
import { niverInitialValues, niverValidationSchema } from "../../../../utils/forms/addNiver";

import { api } from "../../../../utils/axios";
import { useToasts } from "../../../../hooks/useToast";
import { getNormalizedDate } from "../../../../functions/date";
import { ModalNiver } from "./ModalNiver";

interface ModalAddNiverProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAddNiver({ isOpen, onClose }: ModalAddNiverProps) {
    const { addNewPerson } = useContext(NiverContext);
    const { errorToast, successToast } = useToasts();

    const formik = useFormik({
        initialValues: niverInitialValues,
        validationSchema: niverValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await api.post('/niver', values);
                addNewPerson({
                    ...response.data,
                    birthdate: getNormalizedDate(response.data.birthdate)
                });
                onClose();
                successToast("Níver", "Níver adicionado com sucesso");
            } catch (error: any) {
                if (error?.response?.data?.message) {
                    errorToast("Erro ao adicionar", error?.response?.data?.message);
                } else {
                    errorToast("Erro ao adicionar", "Ocorreu um erro ao adicionar usuário");
                }
            }
        }
    });

    return (
        <ModalNiver isOpen={isOpen} onClose={onClose} formik={formik} type="add" />
    )
}