import logo from './logo.svg';

import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Notes from './Notes.js';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="Notes-container">
            <img src={logo} className="App-logo" alt="logo" />
            <Notes name={user.username} />
            <button style={{marginTop: 30}} onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
