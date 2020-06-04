// Libraries
import React from "react";

// Styles
import { Container, Highlight } from "../../../../styles/index.style";
import { Background, Tag } from "./greeting.style";

import Auth from '../../../../Auth';

const Greeting = () => {
  return (
    <Background>
      <Container>
        <Tag>If This Then Donate</Tag>

        <h1>
          Welcome, <Highlight>Username.</Highlight>
        </h1>
        <p>
          Here are your current donations:
        </p>
      </Container>
    </Background>
  );
};

export default Greeting;
