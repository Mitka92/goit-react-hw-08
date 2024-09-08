import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selctors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { closeDeleteModal, closeEditModal } from '../../redux/modal/slice';
import EditForm from '../EditForm/EditForm';
import {
  selectDeleteModalIsOpen,
  selectEditModalIsOpen,
} from '../../redux/modal/selctors';
import Modal from '../Modal/Modal';
import { useCallback, useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import Container from '../Container/Container';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [editContact, setEditContact] = useState({
    contactId: '',
    initialName: '',
    initialNumber: '',
  });

  const handleDataFromChild = useCallback(data => {
    setEditContact(data);
  }, []);

  const isEditModalOpen = useSelector(selectEditModalIsOpen);
  const isDeleteModalOpen = useSelector(selectDeleteModalIsOpen);

  const handleCloseModal = () => {
    if (isEditModalOpen) {
      dispatch(closeEditModal());
    } else if (isDeleteModalOpen) {
      dispatch(closeDeleteModal());
    }
  };
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    dispatch(closeDeleteModal());
  };

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <Container>
        <div className={css['contacts-list']}>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              name={name}
              number={number}
              id={id}
              sendDataToParent={handleDataFromChild}
            />
          ))}
        </div>
        {isLoading && 'Loading...'}
        {error && `${error}`}
      </Container>
      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={handleCloseModal}
          title="Edit contact"
        >
          <EditForm
            contactId={editContact.contactId}
            initialName={editContact.initialName}
            initialNumber={editContact.initialNumber}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModal}
          title="Delete contact"
        >
          <p>
            Are you sure you want to delete <b>{editContact.initialName} </b>
            contact?
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDeleteContact(editContact.contactId)}
          >
            Yes
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              dispatch(closeDeleteModal());
            }}
          >
            No
          </button>
        </Modal>
      )}
    </>
  );
};

export default ContactList;
