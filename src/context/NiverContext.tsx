import { ReactNode, createContext, useEffect, useReducer } from "react";
import { niverReducer } from "../reducers/niver/reducer";
import { addNewPersonAction, editPersonAction, filterPersonsAction, removePersonAction, setBirthdayPersonsAction, setMonthAction } from "../reducers/niver/action";
import { useToasts } from "../hooks/useToast";
import { api } from "../utils/axios";
import { getNormalizedDate, getOrderedBirthdayPersonsByMonth } from "../functions/date";

export interface BirthdayPerson {
    id: number;
    avatar?: string;
    name: string;
    birthdate: Date;
    tag: string;
    description?: string;
    social?: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        whatsapp?: string;
        email?: string;
    }
}

export interface FilterForm {
    name: string;
    tag: string;
}

interface INiverContext {
    month: string;
    birthdayPersons: BirthdayPerson[];
    filteredBirthdayPersons: BirthdayPerson[];
    filteredByForm: boolean;
    setMonth: (month: string) => void;
    setBirthdayPersons: (persons: BirthdayPerson[]) => void;
    addNewPerson: (person: BirthdayPerson) => void;
    removePerson: (personId: number) => void;
    editPerson: (person: BirthdayPerson) => void;
    filterPersons: (filterData: FilterForm) => void;
}

export interface NiverState {
    month: string;
    birthdayPersons: BirthdayPerson[];
    filteredBirthdayPersons: BirthdayPerson[];
    filteredByForm: boolean;
}

export const NiverContext = createContext({} as INiverContext);

export function NiverProvider({ children }: { children: ReactNode }) {
    const { errorToast } = useToasts();
    const [niverState, dispatch] = useReducer(niverReducer, {
        month: 'ver todos',
        birthdayPersons: [],
        filteredBirthdayPersons: [],
        filteredByForm: false
    });

    const { month, birthdayPersons, filteredBirthdayPersons, filteredByForm } = niverState;

    function setMonth(month: string) {
        dispatch(setMonthAction(month));
    }

    function setBirthdayPersons(persons: BirthdayPerson[]) {
        dispatch(setBirthdayPersonsAction(persons));
    }

    function addNewPerson(person: BirthdayPerson) {
        dispatch(addNewPersonAction(person));
    }

    function removePerson(personId: number) {
        dispatch(removePersonAction(personId));
    }

    function editPerson(person: BirthdayPerson) {
        dispatch(editPersonAction(person));
    }

    function filterPersons(filterData: FilterForm) {
        dispatch(filterPersonsAction(filterData));
    }

    async function getBirthdayPersons() {
        try {
            const response = await api.get('/niver');

            const formattedPersons = response.data.map((person: BirthdayPerson) => {
                return {
                    ...person,
                    birthdate: getNormalizedDate(person.birthdate)
                }
            });

            const orderedPersons = getOrderedBirthdayPersonsByMonth(formattedPersons);

            setBirthdayPersons(orderedPersons);
        } catch (error: any) {
            if (error?.response?.data?.message) {
                errorToast("Erro ao buscar", error?.response?.data?.message);
            } else {
                errorToast("Erro ao buscar", "Ocorreu um erro ao buscar os usuários");
            }
        }
    }

    useEffect(() => {
        getBirthdayPersons();
    }, [])

    return (
        <NiverContext.Provider
            value={{
                month,
                birthdayPersons,
                filteredBirthdayPersons,
                filteredByForm,
                setBirthdayPersons,
                setMonth,
                addNewPerson,
                removePerson,
                editPerson,
                filterPersons
            }}
        >
            {children}
        </NiverContext.Provider>
    )
}