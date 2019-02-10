import React, { useState } from 'react';

function App(){

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleFirstNameChange = evt => {
    const newValue = evt.target.value;

    setFirstName(newValue);
  }

  const handleLastNameChange = evt => {
    const newValue = evt.target.value;

    setLastName(newValue);
  }

  const handlePhoneNumberChange = evt => {
    const newValue = evt.target.value;

    setPhoneNumber(newValue);
  }

  return (
    <div>
     
     <br/>
     <label>First Name: </label>
     {firstName}
     <br/>
     <input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange}/>
     
     <br/>
     <label>Last Name: </label>
     {lastName}
     <br/>
     <input type="text" name="lastName" value={lastName} onChange={handleLastNameChange}/>
     
     <br/>
     <label>Phone Number: </label>
     {phoneNumber}
     <br/>
     <input type="text" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange}/>
    </div>
  )
}

export default App;