import React, { useState } from 'react';

function MyObject() {
  //Created  id ,name ,email in array of values
  const [s, setS] = useState([
    { id: 1, name: 'A' ,email:"a@gmail.com"},
    { id: 2, name: 'B' ,email:"b@gmail.com"},
    { id: 3, name: 'C' ,email:"c@gmail.com"},
  ]);
//created the state-variables for adding the data to the existing data
  const [newId, setNewId] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const eventHandler = (e) => {
    e.preventDefault();
    //updating the function
      setS([...s, { id: newId, name: newName ,email:newEmail}]);
    //cleared after assigned
      setNewId('');
      setNewName('');
      setNewEmail('');
    
  };

  return (
    <>
      <form>
        {/*Created the ID , NAME , EMAIL input fields*/}
        <input
          placeholder='Enter Id'
          type='text'
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder='Enter Name'
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <br/>
        <input
          placeholder='Enter Email'
          type='text'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)} />
          <br />
        <br />
        <button onClick={eventHandler}>Submit</button>
      </form>
      {s.map((ob) => (
          <div key={ob.id}>
            <li>  ID  : {ob.id}</li>
            <li> Name : {ob.name}</li>
            <li>Email : {ob.email}</li>
          </div>
        ))}
    </>
  );
};

export default MyObject;
