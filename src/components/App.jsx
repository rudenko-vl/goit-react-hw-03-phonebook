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
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  };

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
