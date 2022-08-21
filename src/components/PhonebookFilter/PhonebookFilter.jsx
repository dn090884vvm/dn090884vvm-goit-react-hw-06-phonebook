import { useDispatch } from 'react-redux';
import { filter } from '../../redux/phonebookActions';

export default function PhonebookFilter() {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(filter(e.target.value));
  };

  return <input type="text" name="" onChange={handleInput} />;
}
