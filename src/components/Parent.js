
import Child from "./Child";
import Apple from "./Apple";
import styles from './Parent.module.css';
function Parent(){
    const childInfo = {age : 20};
    const childList = [{age : 20}, {age : 40}, {age : 35}];
    const childText = childList.map((info,index) => <div key={index}><Child childInfo={info}/></div>);
    const appleInfo = {price : 300, from : 'Kashmir'};

    const myStyle = {color : 'red', backgroudColor : 'lightblue'};

    const text = <>
            <h1 style={myStyle}>Hi, I am Parent</h1>
            <h2 className={styles.bgColor + ' ' + styles.textColor}>Parent styling...</h2>
            {childText}
            { childInfo.age && <Child childInfo={childInfo}/> }
            <Apple appleInfo={appleInfo}/>
            </>;
    return  text;
}

export default Parent;
