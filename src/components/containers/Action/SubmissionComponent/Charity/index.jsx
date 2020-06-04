import React from 'react';

import { Background } from "./charity.style";

function Charity(props) {
    function del() {
        props.delete(props.index);
    }

    return (
        <div className="charity">
            <div className="content">{props.item.charity[0]}</div>
            <div className="content">{props.item.hashtag}</div>
            <div className="content">{props.item.amount}</div>
            {!(props.index==-1) &&
                <div>
                    <button className="donate" onClick={() => {window.open(props.item.charity[1], '_blank');}}>Donate!</button>
                    <button className = "delete" onClick={del}>X</button>
                </div>
            }
            {props.index==-1 &&
                <div className="content"></div>
            }
        </div>
    )
}

export default Charity