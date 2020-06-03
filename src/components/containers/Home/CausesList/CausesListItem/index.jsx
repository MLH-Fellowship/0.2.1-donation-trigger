// Libraries
import React from "react";

// Styles
import { Card, Image } from "./causesListItem.style";

const CausesListItem = ({ data }) => {
  const { name, desc, img, link } = data;

  return (
    <Card img={img}>
      <h2>{name}</h2>
      <a href={link} target="_blank">
        Visit
      </a>
    </Card>
  );
};

export default CausesListItem;
