import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selctors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterValue.toLowerCase())
      );
    })
);
