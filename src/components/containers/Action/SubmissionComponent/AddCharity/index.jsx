// Libraries
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

// Styles
import { Wrapper, FormWrap, Submit } from "./addCharity.style";

const AddCharity = ({ addChar }) => {
  const [formData, setFormData] = useState({
    organization: "",
    hashtag: "",
    amount: "",
    limit: "",
  });

  const [charities] = useState([
    {
      name: "Reclaim the Block",
      website: "https://secure.everyaction.com/zae4prEeKESHBy0MKXTIcQ2",
    },
    {
      name: "Black Visions Collective",
      website: "https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2",
    },
    {
      name: "Philly Bail Fund",
      website: "https://www.phillybailfund.org/donate",
    },
  ]);

  const [formMode, setMode] = useState(false);

  function submit() {
    let newEntry = {
      organization: formData.organization.split(",")[0],
      amount: parseFloat(formData.amount),
      limit: parseInt(formData.limit),
      hashtag: formData.hashtag,
    };

    addChar(newEntry);
    setMode(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      {formMode && (
        <FormWrap>
          <select
            name="organization"
            value={formData && formData.organization}
            onChange={(e) => handleInputChange(e)}
          >
            <option name="Choose a Charity" value="">
              Choose a Charity
            </option>
            {charities.map((item) => (
              <option name={item.name} value={[item.name, item.website]}>
                {item.name}
              </option>
            ))}
          </select>

          <input
            name="hashtag"
            type="text"
            value={formData && formData.hashtag}
            placeholder="eg. #blm"
            onChange={(e) => handleInputChange(e)}
          />

          <CurrencyFormat
            thousandSeparator={true}
            prefix={"$"}
            name="amount"
            type="text"
            value={formData && formData.amount}
            placeholder="$0.01 / hashtag mention"
            onValueChange={(values) => {
              // Destructuring the value without the '$' prefix and as a float
              const { value } = values;

              setFormData({
                ...formData,
                amount: value,
              });
            }}
          />

          <input
            name="limit"
            type="text"
            value={formData && formData.limit}
            placeholder="limit"
            onChange={(e) => handleInputChange(e)}
          />

          <Submit onClick={() => submit()}>&#10003;</Submit>
          <Submit onClick={() => setMode(false)}>X</Submit>
        </FormWrap>
      )}
      {!formMode && (
        <div>
          <button onClick={() => setMode(true)}>
            &#x271A; Add a new donation
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default AddCharity;
