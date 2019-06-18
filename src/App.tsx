import React, { useState } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';
import auth from './service/auth';
import Auth from './Auth';

const App: React.FC = () => {
  const [email, setEmail] = useLocalStorage('userMail', '');
  const [password, setPassword] = useState('');

  const createUser = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth({
      email,
      password,
    }).then(() => {
      setPassword('');
      setEmail('');
    });
  };

  return (
    <>
      <form className="App" onSubmit={createUser}>
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="Enter your email"
        />
        <input
          type="text"
          onChange={e => setPassword(e.target.value)}
          name="password"
          placeholder="Enter a password"
          value={password}
        />

        <button>Submit</button>
      </form>
      <Auth />
    </>
  );
};

export default App;
