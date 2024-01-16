
import Child from "./Child";
import Apple from "./Apple";
import styles from './Parent.module.css';
import { useState } from "react";
import Scooter from "./Scooter";
import EffectSample from "./EffectSample";
import FormSample from "./FormSample";

function Parent(){
    const childInfo = {age : 20};
    const childList = [{age : 40}, {age : 35}];
    const childText = childList.map((info,index) => <div key={index}><Child childInfo={info}/></div>);
    const appleInfo = {price : 300, from : 'Kashmir'};

    const myStyle = {color : 'red', backgroudColor : 'lightblue'};

    let [clickStatus, setClickStatus] = useState('Not clicked');

    let changeStatus = () => {setClickStatus('cliked')};

    const text = <>
            <FormSample />
            <h1 style={myStyle}>Hi, I am Parent</h1>
            <h2 className={styles.bgColor + ' ' + styles.textColor}>Parent styling...</h2>
            <Scooter />
            <p>My status is {clickStatus}. <button onClick={changeStatus}>Try to click me</button></p>
            {childText}
            { childInfo.age && <Child childInfo={childInfo}/> }
            <Apple appleInfo={appleInfo}/>
            <EffectSample />
            </>;
    return  text;
}

export default Parent;
