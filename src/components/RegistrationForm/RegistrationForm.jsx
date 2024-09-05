import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-={}';:"\\|,.<>/?]*$/,
      'Invalid format, allowed characters: letters, numbers, special symbols'
    )
    .required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newProfile = {
      ...values,
    };
    dispatch(register(newProfile));
    actions.resetForm();
  };
  return (
    <>
      <h2 className={css.title}>Registration form</h2>
      <div className={css.wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={RegistrationFormSchema}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
            <button className={css.btn} type="submit">
              registration
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
