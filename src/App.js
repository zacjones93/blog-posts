import React, { useState, useReducer } from 'react';
import './App.css';

function App(){
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    }
  );

  const handleChange = evt => {
    const { name, value} = evt.target;

    setUserInput({[name]: value});
  }

  return (
    <div>
     
     <br/>
     <label>First Name: </label>
     {userInput.firstName}
     <br/>
     <input type="text" name="firstName" value={userInput.firstName} onChange={handleChange}/>
     
     <br/>
     <label>Last Name: </label>
     {userInput.lastName}
     <br/>
     <input type="text" name="lastName" value={userInput.lastName} onChange={handleChange}/>
     
     <br/>
     <label>Phone Number: </label>
     {userInput.phoneNumber}
     <br/>
     <input type="text" name="phoneNumber" value={userInput.phoneNumber} onChange={handleChange}/>
    </div>
  )
}
export default App;
