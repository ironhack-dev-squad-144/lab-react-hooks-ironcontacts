import React from 'react';
import './App.css';

function Contact (props){
  return (
    <div className = "contact-container">
      <img className = "img-celeb" src={props.pictureUrl} alt=""/>
      <h3>{props.name}</h3>
      <h3>{props.popularity}</h3>
      {/* <button onClick ={()=> delete}>

      </button> */}
    </div>
  );
}

export default Contact; 