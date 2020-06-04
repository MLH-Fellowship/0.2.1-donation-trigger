import React from 'react';

import { Background } from "./charity.style";

function Charity(props) {
    function del() {
        props.delete(props.index);
    }

    return (
        <Background>
            <p>{props.item.charity[0]}</p>
            <p>{props.item.hashtag}</p>
            <p>{props.item.amount}</p>
            {!(props.index===-1) &&
                <p>
                    <button onClick={() => {window.open(props.item.charity[1], '_blank');}}>Donate!</button>
                    <button onClick={del}>X</button>
                </p>
            }
            {props.index===-1 &&
                <p></p>
            }
        </Background>
    )
}

export default Charity