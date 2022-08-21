import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookActions';

export default function ContactListItem({ contact }) {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const deletedContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => deletedContact(id)}>Delete</button>
    </li>
  );
}
