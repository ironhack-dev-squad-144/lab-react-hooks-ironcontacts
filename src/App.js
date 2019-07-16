import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';

import fullListOfContacts from './contacts.json'

import ContactTable from './ContactTable'

console.log(fullListOfContacts)

function App() {
  return (
    <div className="App">
      <Container>
      <h1 className="mb-5 mt-5">Iron Contactlist</h1>
      <ContactTable />
      </Container>

    </div>
  );
}

export default App;
