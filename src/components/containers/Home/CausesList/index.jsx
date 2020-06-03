// Libraries
import React, { useState } from "react";

// Styles
import { Container } from "../../../../styles/index.style";
import { List } from "./causesList.style";

// Component Imports
import CauseListItem from "./CausesListItem";

const CausesList = () => {
  // TODO: Probably have this pulled directly from Amplify
  const [orgList] = useState([
    {
      name: "Reclaim The Block",
      desc:
        "Reclaim the Block began in 2018 and organizes Minneapolis community and city council members to move money from the police department into other areas of the city’s budget that truly promote community health and safety. We believe health, safety and resiliency exist without police of any kind.",
      img:
        "https://i.ibb.co/c8jjK6Z/46134603-340111969873683-4567354358135521280-o.jpg",
      link: "https://www.reclaimtheblock.org/home",
    },
    {
      name: "Black Visions Collective",
      desc:
        "Black Visions Collective (BLVC) believes in a future where all Black people have autonomy, safety is community-led, and we are in right relationship within our ecosystems.",
      img: "https://i.ibb.co/JpXR5G9/bvcwebsitehome.jpg",
      link: "https://www.blackvisionsmn.org",
    },
    {
      name: "Philly Bail Fund",
      desc:
        "The Philadelphia Bail Fund is a revolving fund that posts bail for people who are indigent and cannot afford bail. Our goal is to keep families and communities together and vigorously advocate for the end to cash bail in Philadelphia.",
      img: "https://i.ibb.co/48F6h40/25541164516-8c76077ebb-o-0.jpg",
      link: "https://www.phillybailfund.org",
    },
  ]);

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "1rem" }}>Causes you can support</p>

        <List>
          {orgList.map((item) => (
            <CauseListItem data={item} />
          ))}
        </List>
      </Container>
    </div>
  );
};

export default CausesList;
