import React from "react";
import PropTypes from "prop-types";
import { Item, List, Btn } from "./ContactsList.styled";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Btn
            id={contact.id}
            type="button"
            onClick={() => {
              onDeleteContact(contact.id);
            }}
          >
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
