import React from 'react';

import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import PhonebookFilter from 'components/PhonebookFilter/PhonebookFilter';
import ContactList from 'components/ContactList/ContactList';

const Phonebook = () => {
  //   const dispatch = useDispatch();

  //   const filterWord = useSelector(state => state.phonebookReducer.filter);
  //   const contacts = useSelector(state => state.phonebookReducer.contacts);

  //   const gettedContacts = contacts;

  //   const getFilteredContacts = () => {
  //     const normalizedFilter = filterWord.toLowerCase();

  //     return gettedContacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   };

  //   const deleteContact = id => {
  //     dispatch(phonebookActions.deleteContact(id));
  //   };

  return (
    <div>
      <PhonebookForm />
      <PhonebookFilter />
      <ContactList />
      {/* <ul>
        {getFilteredContacts().map(({ id, name, phone }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{phone}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Phonebook;
