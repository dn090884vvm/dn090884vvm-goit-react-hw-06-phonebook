import { useSelector } from 'react-redux';
// import { deleteContact } from 'redux/phonebookActions';
import ContactListItem from './ContactListItem';

export default function ContactList() {
  //   const dispatch = useDispatch();

  const filterWord = useSelector(state => state.phonebookReducer.filter);
  const contacts = useSelector(state => state.phonebookReducer.contacts);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  //   const deletedContact = id => {
  //     dispatch(deleteContact(id));
  //   };

  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact}>
          {/* <p>{name}</p>
          <p>{phone}</p>
          <button onClick={() => deletedContact(id)}>
            Delete
          </button> */}
        </ContactListItem>
      ))}
    </ul>
  );
}
