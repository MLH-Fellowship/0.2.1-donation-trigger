// Libraries
import React from "react";

// Styles
import { Wrapper } from "../styles/action.style";

// Component Imports
import Greeting from "../components/containers/Action/Greeting";
import SubmissionComponent from "../components/containers/Action/SubmissionComponent";
import CausesList from "../components/containers/Home/CausesList";

const Action = () => {
  return (
    <div>
      <Wrapper>
          <Greeting />
          <SubmissionComponent />
          <CausesList />
      </Wrapper>
    </div>
  );
};

export default Action;
