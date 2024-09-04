import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectIsLoading } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <li className={css.contact}>
      <span className={css.info}>
        <span className={css.name}>
          <IconContext.Provider
            value={{ color: 'blue', className: [css.icon] }}
          >
            <IoIosContact />
          </IconContext.Provider>
          <b>{name}</b>
        </span>
        <span className={css.number}>
          <a href={`tel:${number}`}>
            <IconContext.Provider
              value={{ color: 'blue', className: [css.icon] }}
            >
              <FaPhone />
            </IconContext.Provider>
            {number}
          </a>
        </span>
      </span>
      <button
        disabled={isLoading}
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
