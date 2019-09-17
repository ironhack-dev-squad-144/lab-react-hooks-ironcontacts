import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import fullListOfContacts from './contacts.json';
import Contact from "./Contact";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));
  let newContact = fullListOfContacts[Math.floor(Math.random()*fullListOfContacts.length)];
  
  function sortByName() {
    setContacts([...contacts].sort((a,b) => {
      if(a.name >b.name){
        return 1;
      } else {
        return -1;
      }
    }))
  }

  function sortByPopularity(){
    setContacts([...contacts].sort((a,b) => {
      if(a.popularity >b.popularity){
        return -1;
      } else {
        return 1;
      }
    }))
  }

  function removeElement(i){
    let  MyLength = contacts.length;
    // setContacts([...[...contacts].slice(0,i),...[...contacts].slice(i+1,MyLength)])
    setContacts(contacts.filter((contact, j) => i!== j))
  }
  return (
    <div className="App">
      <h1>IronContacts</h1> 

      <button 
       onClick ={()=> 
        setContacts([...contacts,newContact])
      }
      > Add Random Contact</button>
    <button 
       onClick ={()=> 
        sortByName()}
      > Sort by Name</button>
    <button 
       onClick ={()=> 
        sortByPopularity()}
      > Sort by Popularity</button>

      <table className = "header-container">
        <thead>
          <tr>
            <th>Picture</th> 
            <th>Name</th>  
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c,i) => (
        <tr key = {i} >
            <td><img className = "img-celeb" src={c.pictureUrl} alt=""/></td>
            <td>{c.name}</td>
            <td>{c.popularity}</td>
            <button className = "delete-btn" 
            onClick ={()=>
              removeElement(i)
            }
            >Delete</button>
        </tr>
        // <Contact {...c}
         ))}
        </tbody>
    

      </table>
    </div>
  );
}

export default App;
