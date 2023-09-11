import { useContext, useRef } from "react";
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Button } from "@chakra-ui/react";
import { api } from "../../../../utils/axios";
import { useToasts } from "../../../../hooks/useToast";
import { NiverContext } from "../../../../context/NiverContext";

interface ModalDeleteNiverProps {
    id: number;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalDeleteNiver({ id, isOpen, onClose }: ModalDeleteNiverProps) {
    const cancelRef = useRef(null);
    const { removePerson } = useContext(NiverContext);
    const { successToast, errorToast } = useToasts();

    async function handleDeleteNiver() {
        try {
            await api.delete(`/niver/${id}`);
            removePerson(id);
            successToast("Níver", "Níver deletado com sucesso");
        } catch (error: any) {
            if (error?.response?.data?.message) {
                errorToast("Erro ao deletar", error?.response?.data?.message);
            } else {
                errorToast("Erro ao deletar", "Ocorreu um erro ao deletar usuário");
            }
        }
    }

    return (
        <AlertDialog
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader>Deletar Níver</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    Tem certeza que deseja deletar este níver?
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} size={'sm'} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button
                        colorScheme='red'
                        size={'sm'}
                        ml={3}
                        onClick={handleDeleteNiver}
                    >
                        Deletar
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}