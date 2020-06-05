// Libraries
import React from "react";
import { API, graphqlOperation } from "aws-amplify";

// Styles
import { Wrapper } from "../styles/action.style";

// Component Imports
import User from "../components/User";

import Greeting from "../components/containers/Action/Greeting";
import SubmissionComponent from "../components/containers/Action/SubmissionComponent";
import CausesList from "../components/containers/Home/CausesList";

const Action = () => {
  return (
    <User>
      {(userData) => (
        <Wrapper>
          <Greeting user={userData[0]} />
          <SubmissionComponent />
          <CausesList />
        </Wrapper>
      )}
    </User>
  );
};

export default Action;
