import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { clearContacts } from '../../redux/contacts/slice';
import { selectUser } from '../../redux/auth/selctors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
    dispatch(clearContacts());
  };
  return (
    <div className={css.userInfo}>
      <p>Hello, {user.name}!</p>
      <button className={css.btn} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
