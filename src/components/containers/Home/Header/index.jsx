// Libraries
import React from "react";

// Styles
import { Container, Highlight } from "../../../../styles/index.style";
import { Background } from "./header.style";

const Header = () => {
  return (
    <Background>
      <Container>
        <p>If This Then Donate</p>

        <h1>
          Engagement on social media <Highlight>does matter</Highlight>
        </h1>
        <p>
          Make it matter more by automating your donations based on social media
          hashtags and content.
        </p>
      </Container>
    </Background>
  );
};

export default Header;
