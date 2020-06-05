// Libraries
import React from "react";
import TwitterLogin from "react-twitter-login";
import { withRouter } from "react-router-dom";

import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/queries";
import { createUser } from "./graphql/mutations";

const Auth = ({ history }) => {
  const authHandler = async (error, data) => {
    if (error) {
      alert("Please log into Twitter!");
      return;
    }

    console.log(data);

    // Save data to local storage
    localStorage.setItem("user_id", data.user_id);
    localStorage.setItem("user_name", data.screen_name);

    // Create a user and add to db
    const user = {
      twitterId: data.user_id,
      handle: data.screen_name,
    };

    try {
      const users = await API.graphql(graphqlOperation(listUsers))
      const u = users.data.listUsers.items.filter((x) => { return x.screen_name === user.screen_name })
      if (!u) {
        await API.graphql(graphqlOperation(createUser, { input: user }))
      };
    } catch (err) {
      console.error(err);
    }

    window.close();

    // Send them to the main donations page
    history.push("/action");
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={process.env.REACT_APP_CONSUMER_KEY}
      consumerSecret={process.env.REACT_APP_CONSUMER_SECRET}
      callbackUrl={process.env.REACT_APP_CALLBACK_URL}
    />
  );
};

export default withRouter(Auth);
