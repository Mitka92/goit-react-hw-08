import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <ContactForm />
        </Container>
        <Container>
          <SearchBox />
        </Container>
        <Container>
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default ContactsPage;
