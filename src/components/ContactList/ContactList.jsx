import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem';

export default function ContactList() {
  const filterWord = useSelector(state => state.phonebookReducer.filter);
  const contacts = useSelector(state => state.phonebookReducer.contacts);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </ul>
  );
}
