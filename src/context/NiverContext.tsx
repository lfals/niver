import { ReactNode, createContext, useEffect, useReducer } from "react";
import { niverReducer } from "../reducers/niver/reducer";
import { addNewPersonAction, editPersonAction, removePersonAction, setBirthdayPersonsAction, setMonthAction } from "../reducers/niver/action";


export interface BirthdayPerson {
    id: string;
    avatar?: string;
    name: string;
    birthdate: Date;
    tag: string;
    description?: string;
    socialMedia?: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        whatsapp?: string;
        email?: string;
    }
}

const fakeBirthdayPersons: BirthdayPerson[] = [
    {
        id: '1',
        avatar: 'https://bit.ly/ryan-florence',
        name: 'Ryan Florence',
        birthdate: new Date('1995-01-01/'),
        tag: 'Amigos',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        socialMedia: {
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
        tag: 'Família',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum Quisquam, voluptatum',
        socialMedia: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
        }
    },

]

interface INiverContext {
    month: string;
    birthdayPersons: BirthdayPerson[];
    filteredBirthdayPersons: BirthdayPerson[];
    setMonth: (month: string) => void;
    setBirthdayPersons: (persons: BirthdayPerson[]) => void;
    addNewPerson: (person: BirthdayPerson) => void;
    removePerson: (personId: string) => void;
    editPerson: (person: BirthdayPerson) => void;
}

export interface NiverState {
    month: string;
    birthdayPersons: BirthdayPerson[];
    filteredBirthdayPersons: BirthdayPerson[];
}

export const NiverContext = createContext({} as INiverContext);

export function NiverProvider({ children }: { children: ReactNode }) {
    const [niverState, dispatch] = useReducer(niverReducer, {
        month: 'Ver todos',
        birthdayPersons: [],
        filteredBirthdayPersons: []
    });

    const { month, birthdayPersons, filteredBirthdayPersons } = niverState;

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

    useEffect(() => {
        setBirthdayPersons(fakeBirthdayPersons);
    }, [])

    return (
        <NiverContext.Provider
            value={{
                month,
                birthdayPersons,
                filteredBirthdayPersons,
                setBirthdayPersons,
                setMonth,
                addNewPerson,
                removePerson,
                editPerson
            }}
        >
            {children}
        </NiverContext.Provider>
    )
}