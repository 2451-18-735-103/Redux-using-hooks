import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserAge, resetUser } from '../Actions';

const UserComponent = () => {
  const dispatch = useDispatch();
  
  const userName = useSelector(state => state.user.userName);
  const age = useSelector(state => state.user.age);
  
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleUpdateUserName = () => {
    dispatch(setUserName(newName));//It dispatches the setUserName action with newName as the payload to update the user's name in the Redux store.
    setNewName('');//After dispatching, it clears the input field by resetting newName to an empty string.
  };

  const handleUpdateUserAge = () => {
    dispatch(setUserAge(newAge));
    setNewAge('');
  };

  const handleResetUser = () => {
    dispatch(resetUser());
  };

  return (
    <div>
      <h1>Current User: {userName}</h1>
      <p>Age: {age}</p>

      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
        placeholder="Enter new name" 
      />
      <button onClick={handleUpdateUserName}>Update Name</button>

      <input 
        type="number" 
        value={newAge} 
        onChange={(e) => setNewAge(e.target.value)} 
        placeholder="Enter new age" 
      />
      <button onClick={handleUpdateUserAge}>Update Age</button>

      <button onClick={handleResetUser}>Reset User</button>
    </div>
  );
};

export default UserComponent;