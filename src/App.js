import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logIn() {
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <h1>Welcome to Donation-Bot</h1>
      <h4>Engagement on social media does matter: Make it matter more by automating your donations based on social media hashtags 
        and content.</h4>
      {!loggedIn &&
        <div className="login" onClick={() => logIn()}>Login To View and Control Your Donations</div>
      }
      {loggedIn &&
        <div className = "content-wrapper">
          <div className = "welcome-message">
            <h2>Welcome, USERNAME, here are your selected hashtags, charities, and donation amounts.</h2>
          </div>
          <div className = "charities">
            each of the different charities will go here
            <div className = "add-charity">+</div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;