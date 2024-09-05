import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selctors';
import css from './AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  );
};

export default AppBar;
