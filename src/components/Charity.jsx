import React from 'react';
import '../assets/charity.css';

function AddCharity(props) {
    function del() {
        props.delete(props.index);
    }

    return (
        <div className="charity">
            <div className="content">{props.item.charityName}</div>
            <div className="content">{props.item.hashtag}</div>
            <div className="content">{props.item.amount}</div>
            {!(props.index==-1) &&
                <div>
                    <button className="donate">Donate!</button>
                    <button className = "delete" onClick={del}>X</button>
                </div>
            }
            {props.index==-1 &&
                <div className="content"></div>
            }
        </div>
    )
}

export default AddCharity