// Libraries
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createDonation, deleteDonation } from "../../../../graphql/mutations";
import { listUsers, listDonations } from "../../../../graphql/queries";

// Styles
import { Background } from "./submissionComponent.style";

// Component Imports
import AddCharity from "./AddCharity";
import Charity from "./Charity";

const SubmissionComponent = () => {
  const [charities, setCharities] = useState([]);
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchCharities();
    fetchUser();
  }, []);

  const fetchCharities = async () => {
    try {
      const userCharities = await API.graphql(graphqlOperation(listDonations));

      console.log("Donations: " + userCharities.data.listDonations.items);

      const donations = userCharities.data.listDonations.items;

      setCharities(donations);
    } catch (err) {
      console.error(err);
    }
  };

  // We need to know the users data so we can pass the object when the user adds a new donation
  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      // Fetching all users from our database
      const userData = await API.graphql(graphqlOperation(listUsers));

      // Filtering users based on the twitter id and setting is as the data
      setUserData(
        userData.data.listUsers.items.filter(
          (user) => user.twitterId === userId
        )
      );
    } catch (err) {
      console.err(err);
    }
  };

  const addCharity = async (charityObj) => {
    try {
      // Adding the other required and standard values from
      let newDonation = {
        ...charityObj,
        userID: userData && userData[0].id,
        accumulatedAmount: 0.0,
        numberOfCalls: 0,
      };

      await API.graphql(
        graphqlOperation(createDonation, { input: newDonation })
      );

      setCharities([...charities, newDonation]);

      console.log(charities);
    } catch (err) {
      console.error(err);
    }
  };

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
        <p
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          Your donations:
        </p>
        <Charity
          index={-1}
          item={{
            organization: ["Charity Name"],
            hashtag: "Hashtag",
            amount: "Amount Raised",
            limit: "Limit",
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
