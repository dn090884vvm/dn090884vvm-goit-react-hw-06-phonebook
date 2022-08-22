import React from 'react';
import { Wrapper } from './Phonebook.styled';

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
    <>
      <Wrapper>
        <PhonebookForm />
        <PhonebookFilter />
      </Wrapper>

      <Wrapper>
        <ContactList />
      </Wrapper>
    </>
  );
};

export default Phonebook;
