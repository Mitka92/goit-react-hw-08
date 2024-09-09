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
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';

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
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(data => {
        toast.success(`Contact ${data.name} is deleted!`);
      });
    dispatch(closeDeleteModal());
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h2 className={css.title}>Contacts</h2>
          {filteredContacts.length ? (
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
          ) : (
            <h3 style={{ textAlign: 'center' }}>No match found!</h3>
          )}
        </Container>
      )}
      {error && `${error}`}
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
          <div className={css.btnBox}>
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
          </div>
        </Modal>
      )}
    </>
  );
};

export default ContactList;
