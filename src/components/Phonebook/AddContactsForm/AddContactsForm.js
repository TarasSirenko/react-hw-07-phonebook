import s from './AddContactsForm.module.css';
import React, { useState } from 'react';
import checkRecurringContacts from 'utils/checkRecurringContacts';

import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contactsApi/contactsApi';
import AddBtn from './AddBtn/AddBtn';
import InpunName from './InpunName/InpunName';
import InpunNumber from './InpunNumber/InpunNumber';

export default function AddContactsc() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact] = useAddContactMutation();

  const contactsList = useGetAllContactsQuery().data;

  const onSubmit = e => {
    e.preventDefault();

    if (checkRecurringContacts(contactsList, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({ name, phone });
    setName('');
    setPhone('');
  };
  const getCurrentValue = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={s.AddContactscContainer} onSubmit={onSubmit}>
      <InpunName onChange={getCurrentValue} inputValue={name} />
      <InpunNumber onChange={getCurrentValue} inputValue={phone} />
      <AddBtn />
    </form>
  );
}
