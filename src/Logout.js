import React from "react";

const Logout = ({ removeUser }) => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("user");
        removeUser();
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
