import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
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
              value={{ color: 'blue', className: [css.icon] }}
            >
              <IoIosContact />
            </IconContext.Provider>
            <b>{name}</b>
          </div>
          <div className={css.number}>
            <a href={`tel:${number}`}>
              <IconContext.Provider
                value={{ color: 'blue', className: [css.icon] }}
              >
                <FaPhone />
              </IconContext.Provider>
              {number}
            </a>
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
