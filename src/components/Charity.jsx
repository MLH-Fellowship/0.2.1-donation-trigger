import React from 'react';
import '../assets/form.css';

function AddCharity(props) {
    function del() {
        props.delete(props.index);
    }

    return (
        <div className="charity">
            {props.name}
            <button onClick={del}>X</button>
        </div>
    )
}

export default AddCharity