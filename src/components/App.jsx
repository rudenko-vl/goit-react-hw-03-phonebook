import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";
import ContactsList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Title from "./Title/Title";
import { GlobalStyle } from "./GlobalStyle";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const checkForContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkForContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [{ name, id: nanoid(), number }, ...contacts],
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  searchContactByName = (ev) => {
    this.setState({ filter: ev.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterByName();
    return (
      <Container>
        <GlobalStyle />
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.handleFormSubmit} />
        <Title title="Contacts" />
        <Filter onChangeFilter={this.searchContactByName} filter={filter} />
        <ContactsList
          onDeleteContact={this.deleteContact}
          contacts={filteredContacts}
        />
      </Container>
    );
  }
}

export default App;
