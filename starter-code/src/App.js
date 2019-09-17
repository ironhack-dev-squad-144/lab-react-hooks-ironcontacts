import React from 'react';
import './App.css';
import FullListOfContacts from "./contacts.json";
const {useState} = React;


function App() {
 const [contacts,setContacts] = useState(FullListOfContacts.slice(0,5));
 
 function addRandom(){
  setContacts([...contacts,FullListOfContacts[Math.floor(Math.random()*FullListOfContacts.length)]])
 };

 function sortName(){
  setContacts([...contacts].sort((a,b)=>{
    if(a.name > b.name){
      return 1
    }
    if(a.name < b.name){
      return -1
    }
    return 0
  }))
 };

 function deleteBtn(i){
   let copyContacts = [...contacts]
   copyContacts.splice(i,1)
  setContacts(copyContacts)
 }

 function sortPopularity(){
  setContacts([...contacts].sort((a,b)=>{
    if(a.popularity > b.popularity){
      return -1
    }
    if(a.popularity < b.popularity){
      return 1
    }
    return 0
  }))
 }

 return (
   <div className ="contacts">
     <h1>Ironcontacts</h1>
     <button onClick={addRandom}>
       Add random contact
       </button>
     <button onClick={sortName}>
       Sort by Name
       </button>
     <button onClick={sortPopularity}>
       Sort by popularity
       </button>
     <table className="contactsTable">
       <thead>
         <tr>
            <th className="column">Picture</th>
            <th className="column">Name</th>
            <th className="column">Popularity</th>
            <th className="column">Action</th>
         </tr>
         </thead>
        <tbody>
          {[...contacts].map((contact,i)=>
              <tr key={i}>
                <td className="column">
                  <img src={contact.pictureUrl} alt={contact.name}
                  style={{
                    height : 160,
                    width : "auto"
                  }}/>
                </td>
                <td className="column">
                {contact.name}
                </td>
                <td className="column">
                {contact.popularity.toFixed(2)}
                </td>
                <td className="column">
                  <button onClick={() => deleteBtn(i)}>Delete</button>
                </td>

              </tr>
            )}
          </tbody>  
       
       </table> 
   </div>
 )
}

export default App;
