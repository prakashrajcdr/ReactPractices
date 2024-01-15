
function Child(props){
    const {childInfo} = props; // Object destructuring
    // const {age} = childInfo;
    const childData = `Hi, I am Child with ${childInfo.age}`;
    // const childData = 'Hi, I am Child with ' + childInfo.age ;
    return <><h3>{childData}</h3></>;
}

export default Child;
