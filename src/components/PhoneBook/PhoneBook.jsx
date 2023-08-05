import React from 'react';
import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   login: ' babe',
// };
export const PhoneBook = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };
  return (
    <Formik initialValues={{ login: 'Babe' }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <h1>Phonebook</h1>
        <label htmlFor="login">Name</label>
        <Field
          type="text"
          name="login"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit"> Add contact</button>
      </Form>
    </Formik>
  );
};

export default PhoneBook;
