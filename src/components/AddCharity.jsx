import React, { useState } from 'react';
import '../assets/form.css';

function AddCharity(props) {
    const [formMode, setMode] = useState(false);
    const [charity, setCharity] = useState();
    const [amount, setAmount] = useState(0);
    const [hashtag, setHashtag] = useState("");

    function submit() {
        let newEntry = {
            charityName: charity,
            amount: amount,
            hashtag: hashtag
        }

        props.addChar(newEntry);
    }

    return (
        <div className="form-wrapper">
            {formMode &&
                <div>
                    <select value={charity} onChange={() => setCharity("")}>
                        <option name="Choose a Charity" value="">Choose a Charity</option>
                            {[].map(item => (
                                <option name={item.name} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                     </select>
                    Enter a hashtag:
                    <input type="text" value={hashtag} onChange={(e)=>setHashtag(e.target.value)}></input>
                    How much do you want to donate per mention?
                    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                    <button onClick={submit}>Submit</button>
                    <button onClick={() => setMode(false)}>X</button>
                </div>
            }
            {!formMode &&
                <div>
                    <button onClick={() => setMode(true)}>+</button>
                </div>
            }
        </div>
    )
}

export default AddCharity