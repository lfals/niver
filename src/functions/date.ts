import getDate from "date-fns/getDate";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { ptBR } from "date-fns/locale";
import { add, format } from "date-fns";
import { BirthdayPerson } from "../context/NiverContext";

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

export const getNormalizedDate = (date: string | Date) => {
    return add(new Date(date), { hours: 3 });
};

//return the current date in the format YYYY-MM-DD
export const getDateToString = (date: Date) => {
    return format(date, "yyyy-MM-dd");
};

export const getOrderedBirthdayPersonsByMonth = (
    birthdayPersons: BirthdayPerson[]
) => {
    return birthdayPersons.sort((a, b) => {
        //sort by month
        if (a.birthdate.getMonth() < b.birthdate.getMonth()) return -1;
        if (a.birthdate.getMonth() > b.birthdate.getMonth()) return 1;

        return 0;
    });
};
