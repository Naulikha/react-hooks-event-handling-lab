import React from 'react';

function Keypad() {
  const handlePasswordChange = () => {
    console.log('Entering password...');
  };

  return (
    <>
      <label htmlFor="password">Enter Password:</label>
      <input type="password" id="password" onChange={handlePasswordChange} />
    </>
  );
}

export default Keypad;
