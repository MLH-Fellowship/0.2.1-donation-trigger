// Libraries
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createDonation, deleteDonation } from "../../../../graphql/mutations";
import { listDonations } from "../../../../graphql/queries";

// Styles
import { Background } from "./submissionComponent.style";

// Component Imports
import AddCharity from "./AddCharity";
import Charity from "./Charity";

const SubmissionComponent = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    try {
      const userCharities = await API.graphql(graphqlOperation(listDonations));

      console.log(userCharities.data.listDonations.items);

      const donations = userCharities.data.listDonations.items;

      setCharities(donations);
    } catch (err) {
      console.error(err);
    }
  };

  function addCharity(charityObj) {
    console.log(charityObj);
    setCharities(charities.concat([charityObj]));
  }

  function deleteCharity(index) {
    let char = [];
    for (var i = 0; i < charities.length; i++) {
      if (i !== index) {
        char.push(charities[i]);
      }
    }
    setCharities(char);
  }

  return (
    <div>
      <Background>
        <Charity
          index={-1}
          item={{
            charity: ["Charity Name"],
            hashtag: "Hashtag",
            amount: "Amount Raised",
          }}
        />
        {charities.map((item, index) => (
          <Charity index={index} item={item} deleteChar={deleteCharity} />
        ))}
        <AddCharity addChar={addCharity} />
      </Background>
    </div>
  );
};

export default SubmissionComponent;
