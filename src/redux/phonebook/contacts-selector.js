export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = (contacts, filter) => {
  if (filter === '') return contacts;
  const normalizedFilter = filter.toLocaleLowerCase().trim();
  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter),
  );
};
