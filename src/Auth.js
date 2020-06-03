import React from "react";
import TwitterLogin from "react-twitter-login";

const Auth = ({ addUser }) => {
  const authHandler = (error, data) => {
    if (error) {
      alert("Please log into Twitter!");
      return;
    }

    localStorage.setItem("user", data);
    addUser(localStorage.user);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={process.env.CONSUMER_KEY}
      consumerSecret={process.env.CONSUMER_SECRET}
      callbackUrl={process.env.CALLBACK_URL}
    />
  );
};

export default Auth;
