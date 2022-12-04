import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selector';
import { selectIsLoading } from 'redux/contacts/selector';
import { List, ListItem, Button, ListItemWrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const filteredList = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  console.log(isLoading);

  return (
    <>
      <List>
        {filteredList.map(contact => {
          return (
            <ListItem key={contact.id}>
              <ListItemWrapper>
                {contact.name}: {contact.number}
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </Button>
              </ListItemWrapper>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
