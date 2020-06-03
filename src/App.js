import React, { useState, useEffect } from 'react';
import './App.css';

import AddCharity from './components/AddCharity';
import Charity from './components/Charity';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    console.log(charities);
  })

  function logIn() {
    setLoggedIn(true);
  }

  function addCharity(charityObj) {
    setCharities(charities.concat([charityObj]));
  }

  function deleteCharity(index) {
    let char = []
    for(var i = 0; i < charities.length; i++) {
      if(i != index) {
        char.push(charities[i])
      }
    }
    setCharities(char);
  }

  return (
    <div className="App">
      <h1>if this, then donate</h1>
      <h3>Engagement on social media does matter: Make it matter more by automating your donations based on social media hashtags 
        and content.</h3>
      {!loggedIn &&
        <div className="login" onClick={() => logIn()}>Login To View and Control Your Donations</div>
      }
      {loggedIn &&
        <div className = "content-wrapper">
          <div className = "welcome-message">
            <h2>Welcome, USERNAME <br /> Here are your selected hashtags, charities, and donation amounts.</h2>
          </div>
          <div className = "charities">
            <Charity index={-1} item={{charityName:"Charity Name", hashtag:"Hashtag", amount:"Amount Raised"}} />
            {charities.map((item, index) => (
              <Charity index={index} item={item} delete = {deleteCharity} />
            ))}
            <AddCharity addChar={addCharity} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;