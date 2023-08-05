import React from 'react';
import { Formik, Form, Field } from 'formik';
import { number } from 'yup';
// import { object, string, number, date, InferType } from 'yup';

// let userSchema = object({
//   name: string().required(),
//   number: number().required().positive().integer(),
// });

export const PhoneBook = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '', contacts: [] }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <h1>Phonebook</h1>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="number">Number</label>
          <Field
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit"> Add contact</button>
        </Form>
      </Formik>
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PhoneBook;
