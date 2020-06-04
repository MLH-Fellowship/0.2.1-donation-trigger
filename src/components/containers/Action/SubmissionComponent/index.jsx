// Libraries
import React, { useState, useEffect } from "react";

// Styles
import { Container } from "../../../../styles/index.style";

import AddCharity from './AddCharity';
import Charity from './Charity';

const SubmissionComponent = () => {
    const [charities, setCharities] = useState([]);
  
    function addCharity(charityObj) {
      console.log(charityObj);
      setCharities(charities.concat([charityObj]));
    }
  
    function deleteCharity(index) {
      let char = [];
      for (var i = 0; i < charities.length; i++) {
        if (i != index) {
          char.push(charities[i]);
        }
      }
      setCharities(char);
    }

  return (
    <div>
      <Container>
        <div className="charities">
            <Charity
              index={-1}
              item={{
                charity: ["Charity Name"],
                hashtag: "Hashtag",
                amount: "Amount Raised",
              }}
            />
            {charities.map((item, index) => (
              <Charity index={index} item={item} delete={deleteCharity} />
            ))}
            <AddCharity addChar={addCharity} />
          </div>
      </Container>
    </div>
  );
};

export default SubmissionComponent;
