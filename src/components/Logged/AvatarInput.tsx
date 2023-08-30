import { HStack, Avatar, Stack, Input, Box } from "@chakra-ui/react";
import { useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { validateAvatarSize } from "../../utils/forms/addNiver";
import { useToasts } from "../../hooks/useToast";

const avatarPencilPosition = {
    top: "0",
    right: "0.5rem",
    cursor: "pointer",
};

const avatarCloseButtonPosition = {
    bottom: "0rem",
    right: "0.5rem",
    cursor: "pointer",
};

export function AvatarInput({ formik }: { formik: any }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { errorToast } = useToasts();

    function handleFileClick() {
        if (inputRef.current) inputRef.current.click();
    };

    function handleRemoveAvatar() {
        formik.setFieldValue("avatar", "");
    }

    function handleFileChange(event: any) {
        const fileObj = event.target.files && event.target.files[0];

        if (!fileObj) return;
        var reader = new FileReader();
        reader.onload = function (e: any) {
            if (!validateAvatarSize(e.target.result)) {
                errorToast("Arquivo muito grande", "O arquivo deve ter no máximo 2MB.")
                return;
            }
            formik.setFieldValue("avatar", e.target.result);
        };
        reader.readAsDataURL(fileObj);
    };

    return (
        <HStack justifyContent={"center"}>
            <Box position={"relative"}>
                <Avatar
                    size={"xl"}
                    onClick={handleFileClick}
                    src={formik.values.avatar}
                    cursor={"pointer"}
                />

                <Stack
                    bg={"blue.800"}
                    w={"1.5rem"}
                    h={"1.5rem"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"full"}
                    position={"absolute"}
                    style={avatarPencilPosition}
                    onClick={handleFileClick}
                >
                    <FiEdit2
                        color={"#EDF2F7"}
                        fontSize={".875rem"}
                    />
                </Stack>
                {formik.values.avatar && (
                    <Stack
                        bg={"red.500"}
                        w={"1.5rem"}
                        h={"1.5rem"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"full"}
                        position={"absolute"}
                        style={avatarCloseButtonPosition}
                        onClick={handleRemoveAvatar}
                    >
                        <IoMdClose
                            color={"#EDF2F7"}
                            fontSize={"0.938rem"}
                        />
                    </Stack>
                )}
            </Box>
            <Input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                hidden
            />
        </HStack>
    )
}