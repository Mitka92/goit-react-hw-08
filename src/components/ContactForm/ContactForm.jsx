import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
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

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <>
      <h2 className={css.title}>Add contact</h2>
      <div className={css.wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ContactFormSchema}
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
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
