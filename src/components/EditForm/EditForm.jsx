import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './EditForm.module.css';
import { closeEditModal } from '../../redux/modal/slice';

const EditFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .trim()
    .matches(
      /^[0-9+\-()]+$/,
      'Invalid format, only numbers and +, -, () are allowed'
    )
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const EditForm = ({ contactId, initialName, initialNumber }) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: initialName || '',
    number: initialNumber || '',
  };

  const handleSubmit = (values, actions) => {
    const updateContact = {
      ...values,
    };
    // Використання patch для часткового оновлення контакту
    dispatch(editContact({ contactId, updateContact }));
    actions.resetForm();
    dispatch(closeEditModal());
  };

  return (
    <>
      <div className={css.wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={EditFormSchema}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter contact Name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field
              className={css.input}
              type="text"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
            <button className={css.btn} type="submit">
              Edit contact
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditForm;
