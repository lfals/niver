import getDate from "date-fns/getDate";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

//return all months in an array
export const allMonthOptions = [
    "ver todos",
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
];

export const getDayOfMonth = (date: Date) => {
    return getDate(date);
};

export const getDayAndMonth = (date: Date) => {
    return format(date, "dd 'de' LLLL", { locale: ptBR });
};

export const getMonthString = (date: Date) => {
    return format(date, "LLLL", { locale: ptBR });
};

export const getPersonAge = (date: Date) => {
    return formatDistanceToNowStrict(date, {
        unit: "year",
        locale: ptBR,
    });
};
