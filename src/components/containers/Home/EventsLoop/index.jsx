// Libraries
import React, { useState } from "react";
import TextLoop from "react-text-loop";

// Styles
import { Container, Highlight } from "../../../../styles/index.style";
import { Card } from "./eventsLoop.style";

const EventsLoop = () => {
  const [loopText] = useState([
    {
      amount: 0.15,
      org: "Reclaim The Block",
      retweetAmount: 10,
      hashtag: "reclaimtb",
    },
    {
      amount: 1,
      org: "Black Visions Collective",
      retweetAmount: 1000,
      hashtag: "blm",
    },
    {
      amount: 20,
      org: "Philly Bail Fund",
      retweetAmount: 100,
      hashtag: "phillybailfund",
    },
  ]);

  return (
    <div>
      <Container>
        <Card>
          <TextLoop interval="5000">
            {loopText.map((item) => (
              <p>
                Donate <Highlight>${item.amount}</Highlight> to{" "}
                <Highlight>{item.org}</Highlight> for every{" "}
                <Highlight>{item.retweetAmount}</Highlight> retweets of{" "}
                <Highlight>#{item.hashtag}</Highlight>
              </p>
            ))}
          </TextLoop>
        </Card>
      </Container>
    </div>
  );
};

export default EventsLoop;
