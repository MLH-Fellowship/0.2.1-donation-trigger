// Libraries
import React from "react";

// Styles
import Logout from "../../../../Logout";
import { Container, Highlight } from "../../../../styles/index.style";
import { Background, TextContainer } from "./greeting.style";

const Greeting = ({ user }) => {
  const { handle } = user;

  return (
    <Background>
      <Container>
        <TextContainer>
          <h1>
            Welcome, <Highlight>@{handle}</Highlight>
          </h1>

          <Logout />
        </TextContainer>
      </Container>
    </Background>
  );
};

export default Greeting;
