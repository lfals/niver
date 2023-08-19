import { BirthdayPerson, NiverState } from "../../context/NiverContext";
import { getMonthString } from "../../functions/date";
import { ActionTypes } from "./action";

function filterByMonth(month: string, persons: BirthdayPerson[]) {
    return month === "ver todos"
        ? persons
        : persons.filter(
              (person: BirthdayPerson) =>
                  getMonthString(person.birthdate) == month
          );
}

export function niverReducer(state: NiverState, action: any) {
    switch (action.type) {
        case ActionTypes.SET_MONTH:
            return {
                ...state,
                month: action.payload,
                filteredBirthdayPersons: filterByMonth(
                    action.payload,
                    state.birthdayPersons
                ),
            };
        case ActionTypes.SET_BIRTHDAY_PERSONS:
            return {
                ...state,
                birthdayPersons: action.payload,
                filteredBirthdayPersons: filterByMonth(
                    state.month,
                    action.payload
                ),
            };
        case ActionTypes.ADD_NEW_PERSON:
            return {
                ...state,
                birthdayPersons: [...state.birthdayPersons, action.payload],
                filteredBirthdayPersons: filterByMonth(state.month, [
                    ...state.birthdayPersons,
                    action.payload,
                ]),
            };
        case ActionTypes.REMOVE_PERSON:
            return {
                ...state,
                birthdayPersons: state.birthdayPersons.filter(
                    (person) => person.id !== action.payload
                ),
            };
        case ActionTypes.EDIT_PERSON:
            return {
                ...state,
                birthdayPersons: state.birthdayPersons.map((person) =>
                    person.id === action.payload.id ? action.payload : person
                ),
            };
        default:
            return state;
    }
}
