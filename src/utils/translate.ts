import { tagOptions } from "../components/Logged/Niver/TagsOptions";

export const translateTag = (tag: string) => {
    const tagTranslated = tagOptions.find((option) => option.value === tag);
    return tagTranslated?.label;
};
