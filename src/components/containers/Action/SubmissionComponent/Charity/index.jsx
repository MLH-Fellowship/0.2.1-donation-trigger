import React from "react";
import { Background } from "./charity.style";

const Charity = ({ index, item, deleteChar }) => {
  const del = () => {
    deleteChar(index);
  };

  console.log(item);

  return (
    <Background>
      <p>{item.charity}</p>
      <p>{item.hashtag}</p>
      <p>{item.amount}</p>
      {!(index === -1) && (
        <p>
          <button
            onClick={() => {
              window.open(item.charity[1], "_blank");
            }}
          >
            Donate!
          </button>
          <button onClick={del}>X</button>
        </p>
      )}
      {index === -1 && <p></p>}
    </Background>
  );
};

export default Charity;
