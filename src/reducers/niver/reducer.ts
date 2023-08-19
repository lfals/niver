import { BirthdayPerson, NiverState } from "../../context/NiverContext";
import { getMonthString } from "../../functions/date";
import { ActionTypes } from "./action";
import { produce } from "immer";

function filterByMonth(month: string, persons: BirthdayPerson[]) {
    return month === "ver todos"
        ? persons
        : persons.filter(
              (person: BirthdayPerson) =>
                  getMonthString(person.birthdate) == month
          );
}

function isIncludedInMonth(month: string, person: BirthdayPerson) {
    return month === "ver todos" || getMonthString(person.birthdate) === month;
}

export function niverReducer(state: NiverState, action: any) {
    switch (action.type) {
        case ActionTypes.SET_MONTH:
            return produce(state, (draft) => {
                draft.month = action.payload;
                draft.filteredBirthdayPersons = filterByMonth(
                    action.payload,
                    state.birthdayPersons
                );
                draft.filteredByForm = false;
            });

        case ActionTypes.SET_BIRTHDAY_PERSONS:
            return produce(state, (draft) => {
                draft.birthdayPersons = action.payload;

                draft.filteredBirthdayPersons = filterByMonth(
                    state.month,
                    action.payload
                );

                draft.filteredByForm = false;
            });

        case ActionTypes.ADD_NEW_PERSON:
            return produce(state, (draft) => {
                draft.birthdayPersons.push(action.payload);

                if (isIncludedInMonth(state.month, action.payload)) {
                    draft.filteredBirthdayPersons.push(action.payload);
                }
            });

        case ActionTypes.EDIT_PERSON: {
            const personToEditIndex = state.birthdayPersons.findIndex(
                (person) => person.id === action.payload.id
            );
            return produce(state, (draft) => {
                draft.birthdayPersons[personToEditIndex] = action.payload;
                if (isIncludedInMonth(state.month, action.payload)) {
                    draft.filteredBirthdayPersons = filterByMonth(
                        state.month,
                        draft.birthdayPersons
                    );
                }
                draft.filteredByForm = false;
            });
        }

        case ActionTypes.REMOVE_PERSON: {
            const arrayWithoutDeletedPerson = state.birthdayPersons.filter(
                (person) => person.id !== action.payload
            );

            return produce(state, (draft) => {
                draft.birthdayPersons = arrayWithoutDeletedPerson;
                if (isIncludedInMonth(state.month, action.payload)) {
                    draft.filteredBirthdayPersons = filterByMonth(
                        state.month,
                        draft.birthdayPersons
                    );
                }
                draft.filteredByForm = false;
            });
        }

        case ActionTypes.FILTER_PERSONS:
            if (action.payload.name === "" && action.payload.tag === "") {
                return produce(state, (draft) => {
                    draft.filteredBirthdayPersons = filterByMonth(
                        draft.month,
                        draft.birthdayPersons
                    );
                    draft.filteredByForm = false;
                });
            }

            let arrayOfFilteredPersons = filterByMonth(
                state.month,
                state.birthdayPersons
            );

            if (action.payload.name) {
                arrayOfFilteredPersons = arrayOfFilteredPersons.filter(
                    (person) =>
                        person.name
                            .toLowerCase()
                            .includes(action.payload.name.toLowerCase())
                );
            }

            if (action.payload.tag) {
                arrayOfFilteredPersons = [
                    ...arrayOfFilteredPersons.filter((person) =>
                        person.tag.includes(action.payload.tag)
                    ),
                ];
            }

            return produce(state, (draft) => {
                draft.filteredBirthdayPersons = arrayOfFilteredPersons;
                draft.filteredByForm = true;
            });

        default:
            return state;
    }
}
