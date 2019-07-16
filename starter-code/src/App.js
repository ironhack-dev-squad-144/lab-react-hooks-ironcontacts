import React, { useState } from 'react';
import { Table } from 'reactstrap';
import './App.css';
import fullListOfContacts from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));

  function handleClick() {
    let random = Math.floor(Math.random() * fullListOfContacts.length) + 1;
    setContacts([...contacts, fullListOfContacts[random]]);
    console.log("TEST", contacts)
  }

  function sortName() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function sortPopularity() {
    setContacts([...contacts]
      .sort(function(a, b){return a.popularity-b.popularity})
      );
  }

  function deleteActor(e){
    console.log('here i am', e.target.id)
    let x = [...contacts];
    let y = x.splice(e.target.id,1);
    setContacts(x)
}

  return (
    <div className="App">
        <h1>IronContacts</h1>
        <button class ="btn btn-primary" onClick={handleClick}>Add random actor</button>
        <button class ="btn btn-primary"onClick={sortName}>Sort by name</button>
        <button class ="btn btn-primary"onClick={sortPopularity}>Sort by popularity</button>
        <Table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((actor, i) => (
          <tr key={i}>        
            <th><img src={actor.pictureUrl} alt="img" width ="100px"/></th>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            <button class ="btn btn-danger"onClick={deleteActor} id={i}>Delete</button>
            </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
