import { ReactNode, createContext, useEffect, useReducer } from "react";
import { niverReducer } from "../reducers/niver/reducer";
import { addNewPersonAction, editPersonAction, filterPersonsAction, removePersonAction, setBirthdayPersonsAction, setMonthAction } from "../reducers/niver/action";


export interface BirthdayPerson {
    id: string;
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

const fakeBirthdayPersons: BirthdayPerson[] = [
    {
        id: '1',
        avatar: 'https://bit.ly/ryan-florence',
        name: 'Ryan Florence',
        birthdate: new Date('1995-01-01/'),
        tag: 'friend',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        social: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://www.linkedin.com/',
            whatsapp: 'https://web.whatsapp.com/',
            email: 'https://mail.google.com/',
        }
    },
    {
        id: '2',
        avatar: 'https://bit.ly/ryan-florence',
        name: 'Felpera pé sujo',
        birthdate: new Date('1995-02-27/'),
        tag: 'family',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum Quisquam, voluptatum',
        social: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
        }
    },

]

interface INiverContext {
    month: string;
    birthdayPersons: BirthdayPerson[];
    filteredBirthdayPersons: BirthdayPerson[];
    filteredByForm: boolean;
    setMonth: (month: string) => void;
    setBirthdayPersons: (persons: BirthdayPerson[]) => void;
    addNewPerson: (person: BirthdayPerson) => void;
    removePerson: (personId: string) => void;
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

    function removePerson(personId: string) {
        dispatch(removePersonAction(personId));
    }

    function editPerson(person: BirthdayPerson) {
        dispatch(editPersonAction(person));
    }

    function filterPersons(filterData: FilterForm) {
        dispatch(filterPersonsAction(filterData));
    }

    useEffect(() => {
        setBirthdayPersons(fakeBirthdayPersons);
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