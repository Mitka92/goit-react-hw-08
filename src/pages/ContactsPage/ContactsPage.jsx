import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { selectContacts } from '../../redux/contacts/selctors';

function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
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
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <h3 style={{ textAlign: 'center' }}>Your contact list is empty!</h3>
          )}
        </Container>
      </Section>
    </>
  );
}

export default ContactsPage;
