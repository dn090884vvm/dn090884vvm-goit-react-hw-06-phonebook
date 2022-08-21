import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/phonebookActions';

export default function PhonebookFilter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.phonebookReducer.filter);

  const handleInput = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <input type="text" name="search" value={value} onChange={handleInput} />
  );
}
