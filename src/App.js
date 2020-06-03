// Libraries
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "./graphql/mutations";
import { listUsers } from "./graphql/queries";

// Styles
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    fullName: "",
    handle: "",
    token: "random-string-token-0123-456",
  });
  const [users, setUsers] = useState([]);

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

      // Sending our newly created user to our createUser mutation
      await API.graphql(graphqlOperation(createUser, { input: user }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>donation-bot is coming!</h1>

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

      <div>
        <h3>Users list:</h3>

        {users.map((user, i) => (
          <div key={user.id ? user.id : i}>
            <p>
              {user.fullName} | {user.handle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
