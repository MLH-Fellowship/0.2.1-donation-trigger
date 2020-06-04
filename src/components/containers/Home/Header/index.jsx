// Libraries
import React, { useState } from "react";
import Auth from "../../../../Auth";
import Logout from "../../../../Logout";

// Styles
import { Container, Highlight } from "../../../../styles/index.style";
import { Background, Tag } from "./header.style";

require("dotenv").config();

const Header = () => {
  const [user, setUser] = useState(localStorage.user);

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

        {user ? (
          <Logout removeUser={() => setUser(null)} />
        ) : (
          <Auth addUser={(x) => setUser(x)} />
        )}
      </Container>
    </Background>
  );
};

export default Header;
