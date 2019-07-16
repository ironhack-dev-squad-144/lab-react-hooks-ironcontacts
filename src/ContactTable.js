import React, { useState } from "react";

import fullListOfContacts from "./contacts.json";

import { Table } from "reactstrap";

function ContactTable(props) {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));

  function randomIndex() {
    return Math.floor(Math.random() * fullListOfContacts.length);
  }

  function addRandom() {
    setContacts([...contacts, fullListOfContacts[randomIndex()]]);
  }

  function sortPopularity() {
    setContacts([...contacts].sort((a,b)=> b.popularity - a.popularity));
  }

  function sortName() {
    setContacts([...contacts].sort((a,b)=> {
      if (a.name < b.name) {
        return -1
      } else {
        return 1
      }
    }));
  }

  function DeleteContact(e) {
    let key = e.target.id
    console.log("key: ", key)
    let newList = [...contacts]
    newList.splice(key,1)
    console.log("1:", contacts)
    setContacts(newList)
  
  }

  return (
    <div className="contactTable">
      <div>
        <button className="btn btn-primary m-3" onClick={addRandom}>Add Random
        </button>
        <button className="btn btn-primary m-3" onClick={sortName}>Sort by Name</button>
        <button className="btn btn-primary m-3" onClick={sortPopularity}>sort by Popularity</button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                <img
                  className="rounded img-fluid"
                  style={{ width: 100 }}
                  src={contact.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><button id={i} className="btn btn-danger" onClick={DeleteContact}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactTable;
