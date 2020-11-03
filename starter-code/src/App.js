import React, { useState } from 'react';
import './App.css';
import fullListOfContacts from './contacts2.json'

function App() {

  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));


  const newContact = () => {
    return fullListOfContacts[Math.floor(Math.random()*contacts.length -1) + contacts.length]
  }

  const handleAddRandomContact = () => {
    let contact = newContact()

    while(contacts.includes(contact) ) {
      contact = newContact()
    }
    
    setContacts([...contacts, contact])
  }

  const sortContactsByName = () => {
    contacts.sort((a,b) => a.name.localeCompare(b.name))
    setContacts([...contacts] )

  }

  const sortContactsByPopularity = () => {
    contacts.sort((a,b) => b.popularity - a.popularity)

    setContacts([...contacts])
  }

  const deleteContact = (index) => {
    contacts.splice(index, 1)

    setContacts([...contacts])
  }

  return (
    <div className='App'>
          <h1>IronContacts</h1>
        <button onClick={handleAddRandomContact}>Add random Contact</button>
        <button onClick={sortContactsByName}>Sort by name</button>
        <button onClick={sortContactsByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        {contacts.map((contact, index) => {
          return(
            <tbody key={index}>
              <tr >
                <td > <img src={contact.pictureUrl} alt={contact.name}/> </td>
                <td >{contact.name}</td>
                <td >{contact.popularity.toFixed(2)}</td>
                <td><button onClick={()=> deleteContact({index})}>Delete</button></td>
              </tr>
            </tbody>

          )
        }
        )}
      </table>

    </div>
  );
}

export default App;
