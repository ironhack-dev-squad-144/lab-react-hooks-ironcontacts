import React, { useState } from "react";
import fullListOfContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));
  function randomClick(e) {
    e.preventDefault();
    let randomContact = Math.floor(Math.random() * fullListOfContacts.length);
    setContacts([...contacts, fullListOfContacts[randomContact]]);
  }

  function sortByName() {
    contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      else return 1;
    });
    setContacts([...contacts]);
  }
  function sortByPopularity() {
    contacts.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else return -1;
    });
    setContacts([...contacts]);
  }

  function deleteContact(e) {
    contacts.splice(e.target.id, 1);
    setContacts([...contacts]);
  }

  function displayContacts() {
    return contacts.map((contact, i) => (
      <tr key={i}>
        <td>
          <img src={contact.pictureUrl} alt="trollFace" />
        </td>
        <td className="contactName">{contact.name}</td>
        <td>{Math.round(contact.popularity * 100) / 100}</td>
        <td>
          <button onClick={deleteContact} id={i}>
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomClick}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <div className="tableContainer">
        <table className="contactTab">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{displayContacts(contacts)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
