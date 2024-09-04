import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

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
          placeholder="Search by name"
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
