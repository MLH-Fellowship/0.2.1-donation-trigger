// Libraries
import React from "react";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");

        // Send user back to home screen
        history.push("/");
      }}
    >
      Logout
    </button>
  );
};

export default withRouter(Logout);
