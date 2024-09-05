import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selctors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
