import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selector';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // padding: 20,
        // margin: 24,
        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1
        style={{
          color: '#770e7e',
          textShadow: '3px 2px 3px rgba(119, 14, 126, 0.2)',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          color: '#770e7e',
          textShadow: '3px 2px 3px rgba(119, 14, 126, 0.2)',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
