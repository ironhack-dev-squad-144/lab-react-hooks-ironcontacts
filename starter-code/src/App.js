import React, { useState } from "react";
import "./App.css";
import fullListOfContacts from "./contacts.json";
import { Table,Button } from "reactstrap";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));

  function addRandomContact() {
    let randomIndex = Math.floor(Math.random() * fullListOfContacts.length);
    setContacts([...contacts, fullListOfContacts[randomIndex]]);
  }
  
  function sortName() {
    setContacts([...contacts].sort((a,b) => a.name > b.name ? 1 : -1));
    
  }

  function sortPopularity() {
    setContacts([...contacts].sort((a,b) => a.popularity > b.popularity ? -1 : 1));;
  }


  function Delete(event) {
    let key = event.target.id
    //console.log("key: ", key)
    let newList = [...contacts]
    newList.splice(key,1)
    setContacts(newList)
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <Button outline color="info" onClick={addRandomContact}>Add Contacts</Button>    <Button outline color="info" onClick={sortName}>Sort by name</Button>    <Button outline color="info" onClick={sortPopularity}>Sort by popularity</Button>
      <br />
      <Table style={{ width: "420px"}} className="container">
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
                <img
                  className="Contacts"
                  style={{ height: "120px" }}
                  src={contact.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><Button outline color="secondary" size="sm" id={i} onClick={Delete}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;




