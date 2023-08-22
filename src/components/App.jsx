import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContactscForm from './Phonebook/AddContactsForm/AddContactsForm';
import ContactList from './Phonebook/ContactsList/ContactsList';
import SearchEngine from './Phonebook/SearchEngine/SearchEngine';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

// import {base} from "../../src/base"

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<AddContactscForm />} />

        <Route
          path="/contacts"
          exact
          element={
            <>
              <SearchEngine />
              <ContactList />{' '}
            </>
          }
        />

        <Route path="/registre" exact element={<RegisterForm />} />

        <Route path="/login" exact element={<LoginForm />} />
      </Routes>
    </Container>
  );
}
