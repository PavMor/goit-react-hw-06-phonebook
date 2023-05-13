import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Btn, Icon, Contacts, ContactsItem, Name, Number } from './ContactList.styled';
import { FaTrash, FaUserAlt } from 'react-icons/fa';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Icon>
                <FaUserAlt />
              </Icon>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch (deleteContact(id))}>
              <FaTrash />
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};