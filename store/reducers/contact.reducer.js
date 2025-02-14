import { contactService } from '../../services/contact.service.js'

//* Contact
export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const CONTACT_UNDO = 'CONTACT_UNDO'

const initialState = {
    contacts: [],
    lastContacts: [],
    isLoading: false,
    filterBy: contactService.getDefaultFilter(),
}


export function contactReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        //* Contact
        case SET_CONTACTS:
            return {
                ...state,
                contacts: cmd.contacts
            }
        case REMOVE_CONTACT:
            const lastContact = [...state.contacts]
            return {
                ...state,
                Contact: state.contacts.filter(contact => contact._id !== cmd.contactId),
                lastContact
            }

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, cmd.contact]
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === cmd.contact._id ? cmd.contact : contact)
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: cmd.isLoading
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...state.filterBy, ...cmd.filterBy }
            }
        case CONTACT_UNDO:
            return {
                ...state,
                contacts: [...state.lastContacts]
            }

        default:
            return state
    }
}
