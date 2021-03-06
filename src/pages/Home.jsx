// Libraries
import React from "react";

// Styles

// Component Imports
import Header from "../components/containers/Home/Header";
import EventsLoop from "../components/containers/Home/EventsLoop";
import CausesList from "../components/containers/Home/CausesList";

const Home = () => {
  console.log(localStorage.getItem("user_id"));

  return (
    <div>
      <Header />
      <EventsLoop />
      <CausesList />
    </div>
  );
};

export default Home;
