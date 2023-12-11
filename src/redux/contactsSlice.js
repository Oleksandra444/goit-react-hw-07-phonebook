import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
             prepare(data) {
                return { payload: { name: data.name, number: data.number, id: nanoid() } };
            },
        },

        deleteContact(state, action) {
            return state.filter(
                contact => contact.id !== action.payload
            );
        },

    }


});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts;