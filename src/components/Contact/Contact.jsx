import { FcPhoneAndroid } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { FcContacts } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selctors';
import css from './Contact.module.css';
import { openEditModal, openDeleteModal } from '../../redux/modal/slice';

const Contact = ({ id, name, number, sendDataToParent }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => {
    sendDataToParent({ contactId: id, initialName: name }); // Передаємо contactId до батьківського компонента
    dispatch(openDeleteModal());
  };

  const handleEdit = () => {
    sendDataToParent({
      contactId: id,
      initialName: name,
      initialNumber: number,
    });
    dispatch(openEditModal());
  };

  return (
    <>
      <li className={css.contact}>
        <div className={css.info}>
          <div className={css.name}>
            <IconContext.Provider
              value={{ color: 'blue', className: [css.icon], size: '32px' }}
            >
              <FcContacts />
            </IconContext.Provider>
            <b>{name}</b>
          </div>
          <div className={css.number}>
            <IconContext.Provider
              value={{ color: 'blue', className: [css.icon], size: '32px' }}
            >
              <FcPhoneAndroid />
            </IconContext.Provider>
            <a href={`tel:${number}`}>{number}</a>
          </div>
        </div>
        <div className={css.btnBox}>
          <button
            disabled={isLoading}
            type="button"
            className={css.btn}
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            disabled={isLoading}
            type="button"
            className={css.btn}
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </li>
    </>
  );
};

export default Contact;
