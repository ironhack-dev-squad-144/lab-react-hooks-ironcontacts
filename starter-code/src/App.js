import React, { useState } from "react";
import fullListOfContacts from "./contacts.json";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));
  function AddRandom() {
    let randomIndex = Math.floor(Math.random() * fullListOfContacts.length);
    // let randomContact = fullListOfContacts[randomIndex];
    setContacts([...contacts, fullListOfContacts[randomIndex]]);
  }
  function sortName() {
    //[...contacts] is to create a copy, because sort is modifying the array
    setContacts([...contacts].sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  function sortPopularity() {
    setContacts(
      //[...contacts] is to create a copy, because sort is modifying the array
      [...contacts].sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
    );
  }

  function Delete(event) {
    let key = event.target.id;
    let newList = [...contacts];
    newList.splice(key, 1);
    setContacts(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>
        <div className="buttons_container">
          <button className="btn" onClick={AddRandom}>
            Add Random Contact
          </button>
          <button className="btn" onClick={sortName}>
            Sort By Name
          </button>
          <button className="btn" onClick={sortPopularity}>
            Sort By Popularity
          </button>
        </div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contacts.map((contact, i) => (
              <tr key={i}>
                <img className="picture" src={contact.pictureUrl} alt="" />
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  <button id={i} onClick={Delete}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
