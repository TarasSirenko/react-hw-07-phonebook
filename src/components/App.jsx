import React from 'react';
import AddContactscForm from './Phonebook/AddContactsForm/AddContactsForm';
import ContactList from './Phonebook/ContactsList/ContactsList';
import SearchEngine from './Phonebook/SearchEngine/SearchEngine';

// import {base} from "../../src/base"

export default function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContactscForm />
      <SearchEngine />
      <ContactList />
    </div>
  );
}

// JSON.stringify(base)

// console.log(JSON.stringify(base));
fetch('https://645be80699b618d5f329314f.mockapi.io/contacts')
  .then(r => r.json())
  .then(console.log);
