import { useToast as chakraToast } from "@chakra-ui/react";

export function useToasts() {
    const toast = chakraToast();

    function successToast(title: string, description: string) {
        toast({
            title,
            description,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right"
        });
    }

    function errorToast(title: string, description: string) {
        toast({
            title,
            description,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right"
        });
    }

    return {
        successToast,
        errorToast
    }
}