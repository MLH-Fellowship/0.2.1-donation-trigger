import React from "react";

const Logout = ({ removeUser }) => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");
        removeUser();
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
