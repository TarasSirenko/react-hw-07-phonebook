export default function checkRecurringContacts(oldContacts, newContact) {
  return oldContacts.find(
    ({ name }) => newContact.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );
}
