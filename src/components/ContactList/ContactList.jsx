import PropTypes from 'prop-types';
import { Btn, Icon, Contacts, ContactsItem, Name, Number } from './ContactList.styled';
import { FaTrash, FaUserAlt } from 'react-icons/fa';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <Contacts>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Icon>
                <FaUserAlt />
              </Icon>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => deleteContact(id)}>
              <FaTrash />
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};
