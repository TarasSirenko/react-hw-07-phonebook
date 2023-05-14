import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reducer';
import { contactsApi } from './contactsApi/contactsApi';

import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export default store;
