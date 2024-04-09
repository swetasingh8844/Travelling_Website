import React, { useState } from 'react';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {

    console.log('Signing up with username:', username, 'and password:', password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
