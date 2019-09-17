import React, { useState } from "react";
import "./App.css";
import fullListOfContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));

  function AddRandom() {
    setContacts([
      ...contacts,
      fullListOfContacts[Math.floor(Math.random() * fullListOfContacts.length)]
    ]);
  }

  function SortByName() {
    setContacts(
      [...contacts].sort((contact1, contact2) => {
        if (contact1.name > contact2.name) return 1;
        else return -1;
      })
    );
  }

  function SortByPopularity() {
    setContacts(
      [...contacts].sort((contact1, contact2) => {
        if (contact1.popularity > contact2.popularity) return -1;
        else return 1;
      })
    );
  }

  function removeContact(index) {
    let copyContacts = [...contacts];
    copyContacts.splice(index, 1);
    setContacts(copyContacts);
  }

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={AddRandom}>Add a random Contact</button>
        <button onClick={SortByName}>Sort by name</button>
        <button onClick={SortByPopularity}>Sort by Popularity</button>
      </div>
      <table className="contactTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => removeContact(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
