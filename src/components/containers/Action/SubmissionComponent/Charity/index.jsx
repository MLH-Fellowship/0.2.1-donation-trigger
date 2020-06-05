// Libraries
import React from "react";
import CurrencyFormat from "react-currency-format";

// Styles
import { Background } from "./charity.style";

const Charity = ({ index, item, deleteChar }) => {
  const del = () => {
    deleteChar(index);
  };

  console.log(item);

  return (
    <Background isHeader={index === -1}>
      <p>{item.organization}</p>
      <p>{item.hashtag}</p>
      {index === -1 ? (
        <p>{item.amount}</p>
      ) : (
        <CurrencyFormat
          value={item.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <p>{value}</p>}
        />
      )}

      {index === -1 ? (
        <p>{item.limit}</p>
      ) : (
        <CurrencyFormat
          value={item.limit}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <p>{value}</p>}
        />
      )}

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
