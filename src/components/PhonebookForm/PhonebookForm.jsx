import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebookActions';

export default function PhonebookForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formDatas = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };

    dispatch(addContact(formDatas));

    e.target.elements.name.value = '';
    e.target.elements.phone.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />

      <input type="text" name="phone" />

      <button type="submit">Add contact</button>
    </form>
  );
}
