import s from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi/contactsApi';

export default function ContactItem({ name, phone, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={s.Item}>
      {name}: {phone}
      <button
        type="button"
        disabled={isLoading}
        className={s.Button}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Delate...' : 'Delate'}
      </button>
    </li>
  );
}
