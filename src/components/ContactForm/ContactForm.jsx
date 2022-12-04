import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CircularProgress from '@mui/material/CircularProgress';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts, selectIsLoading } from 'redux/contacts/selector';
import { Field, Form, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (value, { resetForm }) => {
    console.log(isLoading);
    let isDuplicate = false;

    const filteredContacts = contacts.filter(
      item => item.name.toLocaleLowerCase() === value.name.toLocaleLowerCase()
    );
    isDuplicate = filteredContacts.length === 0;
    console.log(filteredContacts.length > 0);
    if (isDuplicate) {
      const contact = { name: value.name, number: value.number };
      dispatch(addContact(contact));
      resetForm();
    } else {
      Notify.failure(`${value.name} is already in contacts`);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor="name">Name</Label>
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor="number">Number</Label>
          <Field
            id="number"
            type="tel"
            name="number"
            placeholder="Number phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">
            {isLoading ? (
              <CircularProgress sx={{ color: '#3affe9' }} size={24} />
            ) : (
              <AddIcCallIcon />
            )}
            Add contact{console.log(isLoading)}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
