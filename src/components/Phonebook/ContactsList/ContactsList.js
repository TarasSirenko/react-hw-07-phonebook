import React from 'react';

import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useGetAllContactsQuery } from 'redux/contactsApi/contactsApi';
import {
  getFilter,
  getVisibleContacts,
} from 'redux/phonebook/contacts-selector';

import { useSelector } from 'react-redux';

export default function ContactList() {
  const contactsList = useGetAllContactsQuery().data;
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contactsList, filter);
  return (
    <div className={s.Container}>
      <ul className={s.ContactList}>
        {visibleContacts &&
          visibleContacts.map(({ name, id, phone }) => {
            return <ContactItem key={id} name={name} phone={phone} id={id} />;
          })}
      </ul>
    </div>
  );
}
