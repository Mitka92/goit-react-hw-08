import './App.css';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <div className="phone-book">
        <h1 className="title">
          <span className="span">P</span>honebook
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Section>
  );
}

export default App;
