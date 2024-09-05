import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteModal, closeEditModal } from '../../redux/modal/slice'; // Імпорт дій для закриття модальних вікон
import {
  selectDeleteModalIsOpen,
  selectEditModalIsOpen,
} from '../../redux/modal/selctors'; // Імпорт селекторів для перевірки стану модалок
import css from './Modal.module.css';

const Modal = ({ title, children }) => {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector(selectEditModalIsOpen);
  const isDeleteModalOpen = useSelector(selectDeleteModalIsOpen);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        if (isEditModalOpen) {
          dispatch(closeEditModal());
        } else if (isDeleteModalOpen) {
          dispatch(closeDeleteModal());
        }
      }
    };

    if (isEditModalOpen || isDeleteModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [dispatch, isEditModalOpen, isDeleteModalOpen]);

  if (!isDeleteModalOpen && !isEditModalOpen) return null;

  const handleClose = () => {
    if (isEditModalOpen) {
      dispatch(closeEditModal());
    } else if (isDeleteModalOpen) {
      dispatch(closeDeleteModal());
    }
  };

  return ReactDOM.createPortal(
    <div className={css.modalBackdrop} onClick={handleClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={handleClose}>
          ×
        </button>
        {title && <h2 className={css.title}>{title}</h2>}
        <div className={css.modalBody}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
