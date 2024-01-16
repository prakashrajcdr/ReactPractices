
import { useState } from "react";

function Scooter(){

    let [scooterObj, setScooterObj] = useState({color : 'Black', brand : 'Activa'});

    return <>
        <h1>Scooter Details</h1>
        <p>Color: {scooterObj.color}</p>
        <p>Brannd: {scooterObj.brand}</p>
        <button onClick={() => {setScooterObj(previousState => {return {...previousState, color: 'Red'}});}}>Change Scooter Detail</button>
    </>;
}

export default Scooter;
