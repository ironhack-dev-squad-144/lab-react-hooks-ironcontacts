import React, { useState, useEffect } from "react";
import ContactList from "./contacts.json";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(ContactList.slice(0, 5));
  function addContactRandom(e) {
    let randomIndex = Math.floor(Math.random() * ContactList.length);
    let contactsNames = contacts.map(contact => contact.name);
    while (contactsNames.includes(ContactList[randomIndex].name)) {
      randomIndex = Math.floor(Math.random() * ContactList.length);
    }
    let randomActor = ContactList[randomIndex];
    setContacts([...contacts, randomActor]);
  }

  function sortByName() {
    console.log("here");
    const sortedArr = contacts.sort((a, b) => {
      var nameA = a.name;
      var nameB = b.name;
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
    });
    setContacts([...sortedArr]);
    console.log(contacts);
  }

  function sortByPopularity() {
    console.log("here");
    const sortedArr = contacts.sort((a, b) => {
      var popA = a.popularity;
      var popB = b.popularity;
      if (popA < popB) {
        return 1;
      } else if (popA > popB) {
        return -1;
      }
    });
    setContacts([...sortedArr]);
    console.log(contacts);
  }

  function deleteActor(index, e) {
    const removedArr = contacts.filter(contact => {
      return contact !== contacts[index];
    });
    // or
    const removedArr2 = [...contacts]
      .slice(0, index)
      .concat([...contacts].slice(index, contacts.length - 1));
    console.log(removedArr);
    setContacts(removedArr);
  }

  return (
    <div className="App">
      <h1 className="Title">IronContacts</h1>
      <div className="buttons">
        <button onClick={addContactRandom}>Add a random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>sort by popularity</button>
      </div>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {contacts.map((contact, index) => {
          return (
            <tr id={contact.name} key={contact.name}>
              <td>
                <img src={contact.pictureUrl} style={{ width: 100 }}></img>
              </td>
              <td>
                <span>{contact.name}</span>
              </td>
              <td>
                <span>{String(contact.popularity).slice(0, 4)}</span>
              </td>
              <td>
                <button
                  className="delete"
                  index={index}
                  onClick={e => {
                    deleteActor(index, e);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
