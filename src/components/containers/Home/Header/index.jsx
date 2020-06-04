// Libraries
import React from "react";

// Styles
import { Container, Highlight } from "../../../../styles/index.style";
import { Background, Tag } from "./header.style";

import Auth from '../../../../Auth';

const Header = () => {
  return (
    <Background>
      <Container>
        <Tag>If This Then Donate</Tag>

        <h1>
          Engagement on social media <Highlight>does matter</Highlight>
        </h1>
        <p>
          Make it matter more by automating your donations based on social media
          hashtags and content.
        </p>

        <p>Start donating today by</p>
        <button>Signing in with Twitter</button>
        {/* <Auth /> */}
      </Container>
    </Background>
  );
};

export default Header;
