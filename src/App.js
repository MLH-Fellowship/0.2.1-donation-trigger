// Libraries
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUser, createDonation, deleteDonation } from "./graphql/mutations";
import { listUsers, listDonations } from "./graphql/queries";

// Styles
import "./App.css";

import AddCharity from './components/AddCharity';
import Charity from './components/Charity';

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

  useEffect(() => {
    fetchUser();
    fetchDonations();
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

      console.log(userData.data.listUsers.items);

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

    // Adding a charity/donations to the db
    const addCharity = async (charityObj) => {
      try {
        if (!charityObj.charity || !charityObj.amount) return; // making sure the inputs have values

        setCharities(charities.concat([charityObj]));

        const input = {
          userID: users[0].id,
          trigger: "TWEET",
          initialAmount: parseFloat(charityObj.amount),
          accumulatedAmount: 0.00,
          numberOfCalls: 0,
          limit: 0
        }
  
        await API.graphql(graphqlOperation(createDonation, { input: input }));
      } catch (err) {
        console.error(err);
      }
    };

    // Fetching the donations with our graphql query
    const fetchDonations = async () => {
      try {
        const donationData = await API.graphql(graphqlOperation(listDonations));

        console.log(donationData.data.listDonations.items);
      } catch (err) {
        console.error(err);
    }
  };

  // Deleting a user from the DB

  // NOT WORKING FOR ME
  const deleteDonation = async (charityObj) => {
    try {
      if (!charityObj.charity || !charityObj.amount) return; // making sure the inputs have values


      const input = {
        userID: users[0].id,
        trigger: "TWEET",
        initialAmount: parseFloat(charityObj.amount),
        accumulatedAmount: 0.00,
        numberOfCalls: 0,
        limit: 0
      }

      console.log(input)
      
      await API.graphql(graphqlOperation(deleteDonation, {input: {id: "6cc6c971-c0d2-4499-93aa-e99fa3d39d84"}}));
    } catch (err) {
      console.error(err);
    }
  };

  //id the charity and then delete from the db based on that
  function deleteCharity(index) {
    let char = []
    for(var i = 0; i < charities.length; i++) {
      if(i != index) {
        char.push(charities[i])
      } else {
        deleteDonation(charities[i])
      }
    }
    setCharities(char);
  };

  return (
    <div className="App">
      <h1>if this, then donate</h1>
      <h3>Engagement on social media does matter: Make it matter more by automating your donations based on social media hashtags 
        and content.</h3>

      {/* <div>
        <h3>Users list:</h3>

        {users.map((user, i) => (
          <div key={user.id ? user.id : i}>
            <p>
              {user.fullName} | {user.handle}
            </p>
          </div>
        ))}
      </div> */}

      {!loggedIn &&
        <div>
          <div className="login" onClick={() => setLoggedIn(true)}>Login To View and Control Your Donations</div>
          <div className="login" onClick={() => setCreatingAccount(true)}>Create an Account</div>
        </div>
      }
      {creatingAccount &&
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
      }
      {loggedIn &&
        <div className = "content-wrapper">
          <div className = "welcome-message">
            <h2>Welcome, {users[0].fullName}! <br /> Here are your selected hashtags, charities, and donation amounts.</h2>
          </div>
          <div className = "charities">
            <Charity index={-1} item={{charity: ["Charity Name"], hashtag:"Hashtag", amount:"Amount Raised"}} />
            {charities.map((item, index) => (
              <Charity index={index} item={item} delete={deleteCharity} />
            ))}
            <AddCharity addChar={addCharity} />
          </div>
        </div>
      }
    </div>
  )}

export default App;
