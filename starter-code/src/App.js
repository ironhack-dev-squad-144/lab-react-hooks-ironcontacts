import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import fullListOfContacts from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));

  function addRandomContact() {
    const randomNumber = Math.floor(Math.random() * ((fullListOfContacts.length - 1) - contacts.length +1)+ contacts.length)
    const randomContact = fullListOfContacts[randomNumber]
    console.log(randomContact)

    if(!contacts.includes(randomContact)) {
        setContacts([...contacts, randomContact])
      } else {
        console.log('Contact is already present')
      }
  }

  function sortByName() {
    const contactsSortedByName = contacts.sort((a,b) => a.name.localeCompare(b.name))
    setContacts([...contactsSortedByName])
  }

  function sortByPopularity() {
    const contactsSortedByPopularity = contacts.sort((a,b) => b.popularity - a.popularity)
    setContacts([...contactsSortedByPopularity])
  }

  function deleteContact(contactName) {
    const filteredContacts = contacts.filter(contact => {
      return contact.name !== contactName
    })
    setContacts([...filteredContacts])
  }


  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
        <head>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </head>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt=""></img></td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100)/100}</td>
                <td><button onClick={() => deleteContact(contact.name)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
