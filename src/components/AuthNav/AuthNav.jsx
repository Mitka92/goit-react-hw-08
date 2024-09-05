import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
