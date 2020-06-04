import React, { useState } from 'react';
import '../../../assets/form.css';


let charities = [
    {
        name: "Reclaim the Block",
        website: "https://secure.everyaction.com/zae4prEeKESHBy0MKXTIcQ2"
    },
    {
        name: "Black Visions Collective",
        website: "https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2"
    },
    {
        name: "Philly Bail Fund",
        website: "https://www.phillybailfund.org/donate"
    }
]

function AddCharity(props) {
    const [formMode, setMode] = useState(false);
    const [charity, setCharity] = useState();
    const [amount, setAmount] = useState();
    const [hashtag, setHashtag] = useState("");

    function submit() {
        let newEntry = {
            charity: charity.split(","),
            amount: amount,
            hashtag: hashtag
        }
        console.log(charity.split(","))

        props.addChar(newEntry);

        setMode(false);
        setCharity();
        setAmount(0);
        setHashtag("");
    }

    return (
        <div>
            {formMode &&
                <div className="form-wrapper">
                    <select value={charity} onChange={(e) => setCharity(e.target.value)}>
                        <option name="Choose a Charity" value="">Choose a Charity</option>
                            {charities.map(item => (
                                <option name={item.name} value={[item.name, item.website]}>
                                    {item.name}
                                </option>
                            ))}
                     </select>
                    <input type="text" value={hashtag} placeholder="eg. #blm" onChange={(e)=>setHashtag(e.target.value)}></input>
                    <input 
                        type="text" value={amount} 
                        placeholder="$0.01 / hashtag mention" 
                        onChange={(e)=>setAmount(e.target.value)} />
                    <button className="submit" onClick={submit}>&#10003;</button>
                    <button className="delete" onClick={() => setMode(false)}>X</button>
                </div>
            }
            {!formMode &&
                <div>
                    <button className="add" onClick={() => setMode(true)}>&#x271A; Add a donation</button>
                </div>
            }
        </div>
    )
}

export default AddCharity