import React from 'react';
import Phonebook from '../../components/Phonebook';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';

const ContactsView = () => (
  <>
    <h1>Phonebook</h1>
    <Phonebook />
    <h2>Contacts</h2>
    <Filter />
    <Contacts />
  </>
);

export default ContactsView;
