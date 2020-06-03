// Libraries
import React from "react";

// Styles
import { Container } from "../styles/index.style";

// Component Imports
import Header from "../components/containers/Home/Header";
import EventsLoop from "../components/containers/Home/EventsLoop";

const Home = () => {
  return (
    <div>
      <Header />
      <EventsLoop />
    </div>
  );
};

export default Home;
