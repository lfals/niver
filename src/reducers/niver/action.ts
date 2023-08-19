import { BirthdayPerson, FilterForm } from "../../context/NiverContext";

export enum ActionTypes {
    SET_MONTH = "SET_MONTH",
    SET_BIRTHDAY_PERSONS = "SET_BIRTHDAY_PERSONS",
    ADD_NEW_PERSON = "ADD_NEW_PERSON",
    REMOVE_PERSON = "REMOVE_PERSON",
    EDIT_PERSON = "EDIT_PERSON",
    FILTER_PERSONS = "FILTER_PERSONS",
}

export function setMonthAction(month: string) {
    return {
        type: ActionTypes.SET_MONTH,
        payload: month,
    };
}

export function setBirthdayPersonsAction(persons: BirthdayPerson[]) {
    return {
        type: ActionTypes.SET_BIRTHDAY_PERSONS,
        payload: persons,
    };
}

export function addNewPersonAction(person: BirthdayPerson) {
    return {
        type: ActionTypes.ADD_NEW_PERSON,
        payload: person,
    };
}

export function removePersonAction(id: string) {
    return {
        type: ActionTypes.REMOVE_PERSON,
        payload: id,
    };
}

export function editPersonAction(person: BirthdayPerson) {
    return {
        type: ActionTypes.EDIT_PERSON,
        payload: person,
    };
}

export function filterPersonsAction(filterData: FilterForm) {
    return {
        type: ActionTypes.FILTER_PERSONS,
        payload: filterData,
    };
}
