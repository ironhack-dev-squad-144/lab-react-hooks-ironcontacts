import React, { useState } from 'react';
import fullListOfContacts from './contacts.json'
import './App.css';

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));
  function addRandom(){
    setContacts([...contacts, fullListOfContacts[Math.floor(Math.random() * fullListOfContacts.length)]])
  }
  
function sortName(){
  setContacts( [...contacts].sort((a,b)=> {
    if (a.name>b.name) return 1;
    else return -1
  }))
}

function sortPopularity(){
  setContacts( [...contacts].sort((a,b)=> {
    if (a.popularity>b.popularity) return -1;
    else return 1
  }))
}

function deleteButton(index){

}

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick ={()=> addRandom()}>Add random contact</button>
      <button onClick ={()=> sortName()}>Sort by name</button>
      <button onClick ={()=> sortPopularity()}>Sort by popularity</button>
      <hr/>
      <table>
        <thead>
            <tr>
                <th><h1>Picture</h1></th>
                <th><h1>Name</h1></th>
                <th><h1>Popularity</h1></th>
                <th><h1>Action</h1></th>
            </tr>
        </thead>
        <tbody>
                {contacts.map((element, i) => <tr key={i}> 
                <td><img src={element.pictureUrl} alt="img"/></td>
                <td>{element.name}</td>
                <td>{element.popularity.toFixed(2)}</td> <button onClick ={()=> deleteButton()}>Delete</button></tr>)}
                
        </tbody>
      </table>
    </div>
  );
}

export default App;
