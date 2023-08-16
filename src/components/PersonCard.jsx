import React, { useState } from "react";

const PersonCard = (props) => {
    const [ newAge, setNewAge ] = useState(props.age);
    return (

        <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {newAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ (e) => setNewAge(newAge + 1)}>Increase Age</button>
        </>
    )
}
export default PersonCard;