import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selctors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      <h2 className={css.title}>Search</h2>
      <div className={css.wrapper}>
        <input
          placeholder="Name or number"
          className={css.input}
          type="text"
          name="search"
          value={filterValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
