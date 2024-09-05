import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const LoginFormSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const loginValues = {
      ...values,
    };
    dispatch(login(loginValues));
    actions.resetForm();
  };
  return (
    <>
      <h2 className={css.title}>Login form</h2>
      <div className={css.wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={LoginFormSchema}
        >
          <Form className={css.form}>
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
              login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
