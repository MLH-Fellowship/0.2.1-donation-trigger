import React, { useState } from 'react';
import '../assets/form.css';

function AddCharity(props) {
    const [formMode, setMode] = useState(false);
    const [charity, setCharity] = useState();
    const [amount, setAmount] = useState();
    const [hashtag, setHashtag] = useState("");

    function submit() {
        let newEntry = {
            charityName: charity,
            amount: amount,
            hashtag: hashtag
        }

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
                        <option name="Charity 1" value="Charity 1">Charity 1</option>
                            {[].map(item => (
                                <option name={item.name} value={item.name}>
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