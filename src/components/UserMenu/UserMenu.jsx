import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selctors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.userInfo}>
      <p className={css.text}>Hello, {user.name}!</p>
      <button className={css.btn} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
