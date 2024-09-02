import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contact/add": {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case "contact/delete": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = (payload) => {
//   return {
//     type: "contact/add",
//     payload: payload,
//   };
// };

// export const deleteContact = (contactId) => {
//   return {
//     type: "contact/delete",
//     payload: contactId,
//   };
// };
