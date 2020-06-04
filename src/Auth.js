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
    window.close()
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

export default Auth;
