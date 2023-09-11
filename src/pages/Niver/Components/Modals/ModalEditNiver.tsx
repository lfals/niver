import { BirthdayPerson, NiverContext } from "../../../../context/NiverContext";
import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { niverInitialValues, niverValidationSchema } from "../../../../utils/forms/addNiver";

import { api } from "../../../../utils/axios";
import { useToasts } from "../../../../hooks/useToast";
import { getDateToString, getNormalizedDate } from "../../../../functions/date";
import { ModalNiver } from "./ModalNiver";

interface ModalEditNiverProps {
    isOpen: boolean;
    onClose: () => void;
    person: BirthdayPerson;
}

export function ModalEditNiver({ isOpen, onClose, person }: ModalEditNiverProps) {
    const { editPerson } = useContext(NiverContext);
    const { errorToast, successToast } = useToasts();

    const formik = useFormik({
        initialValues: niverInitialValues,
        validationSchema: niverValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await api.patch(`/niver/${person.id}`, values);
                editPerson({
                    ...response.data,
                    birthdate: getNormalizedDate(response.data.birthdate)
                });
                onClose();
                successToast("Níver", "Níver editado com sucesso");
            } catch (error: any) {
                if (error?.response?.data?.message) {
                    errorToast("Erro ao editar", error?.response?.data?.message);
                } else {
                    errorToast("Erro ao editar", "Ocorreu um erro ao editar usuário");
                }
            }
        }
    });

    useEffect(() => {
        person && formik.setValues({
            avatar: person?.avatar || '',
            name: person?.name || '',
            birthdate: person?.birthdate ? getDateToString(person?.birthdate) : '',
            tag: person?.tag || '',
            description: person?.description || '',
            social: {
                facebook: person?.social?.facebook || '',
                instagram: person?.social?.instagram || '',
                linkedin: person?.social?.linkedin || '',
                whatsapp: person?.social?.whatsapp || '',
                email: person?.social?.email || '',
            }
        });
    }, [person]);

    return (
        <ModalNiver isOpen={isOpen} onClose={onClose} formik={formik} type="edit" />
    )
}