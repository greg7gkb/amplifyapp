import React from 'react';
import logo from './fam.jpg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created using React
            </a>
            <p />
            <button onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
