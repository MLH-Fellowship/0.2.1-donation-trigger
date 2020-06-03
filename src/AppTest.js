import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "./graphql/mutations";
import { listUsers } from "./graphql/queries";
import Auth from "./Auth";
import Logout from "./Logout";

// Styles
import "./App.css";

import AddCharity from "./components/AddCharity";
import Charity from "./components/Charity";

require("dotenv").config();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [charities, setCharities] = useState([]);
  const [formState, setFormState] = useState({
    fullName: "",
    handle: "",
    token: "random-string-token-0123-456",
  });

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(localStorage.user);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Fetching the user with our graphql query
  const fetchUser = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));

      console.log(userData.data.listUsers);

      const users = userData.data.listUsers.items;

      setUsers(users);
    } catch (err) {
      console.error(err);
    }
  };

  // Adding a single user to our db
  const addUser = async () => {
    try {
      if (!formState.fullName || !formState.handle) return; // making sure the inputs have values

      const user = { ...formState };
      setUsers([...users, user]);

      setFormState({
        ...formState,
        fullName: "",
        handle: "",
      });

      setLoggedIn(true);
      setCreatingAccount(false);

      // Sending our newly created user to our createUser mutation
      await API.graphql(graphqlOperation(createUser, { input: user }));
    } catch (err) {
      console.error(err);
    }
  };

  function addCharity(charityObj) {
    console.log(charityObj);
    setCharities(charities.concat([charityObj]));
  }

  function deleteCharity(index) {
    let char = [];
    for (var i = 0; i < charities.length; i++) {
      if (i != index) {
        char.push(charities[i]);
      }
    }
    setCharities(char);
  }

  return (
    <div className="App">
      <h1>if this, then donate</h1>
      <h3>
        Engagement on social media does matter: Make it matter more by
        automating your donations based on social media hashtags and content.
      </h3>

      {user ? (
        <Logout removeUser={() => setUser(null)} />
      ) : (
        <Auth addUser={(x) => setUser(x)} />
      )}
      {creatingAccount && (
        <div>
          <h2>Create user sample</h2>

          <input
            name="fullName"
            value={formState.fullName}
            onChange={(e) => handleInputChange(e)}
            placeholder="Full name..."
          />

          <input
            name="handle"
            value={formState.handle}
            onChange={(e) => handleInputChange(e)}
            placeholder="Handle..."
          />

          <button onClick={() => addUser()}>Create user</button>
        </div>
      )}
      {loggedIn && (
        <div className="content-wrapper">
          <div className="welcome-message">
            <h2>
              Welcome, {users[0].fullName} <br /> Here are your selected
              hashtags, charities, and donation amounts.
            </h2>
          </div>
          <div className="charities">
            <Charity
              index={-1}
              item={{
                charity: ["Charity Name"],
                hashtag: "Hashtag",
                amount: "Amount Raised",
              }}
            />
            {charities.map((item, index) => (
              <Charity index={index} item={item} delete={deleteCharity} />
            ))}
            <AddCharity addChar={addCharity} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
