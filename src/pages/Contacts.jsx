import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import CircularProgress from '@mui/material/CircularProgress';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selector';
import { ContactForm } from 'components/ContactForm/ContactForm';

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#770e7e',
          textShadow: '3px 2px 3px rgba(119, 14, 126, 0.2)',
        }}
      >
        <ImportContactsIcon sx={{ fontSize: 70 }} />
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: '#770e7e',
          textShadow: '3px 2px 3px rgba(119, 14, 126, 0.2)',
        }}
      >
        <ContactPhoneIcon sx={{ fontSize: 40 }} />
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && (
        <CircularProgress sx={{ color: '#770e7e' }} size={24} />
      )}

      <ContactList />
    </div>
  );
}
