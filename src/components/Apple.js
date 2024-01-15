

import React from "react";

class Apple extends React.Component {

    render(){
        const { price, from }= this.props.appleInfo;

        return <h2>Hi, I am Apple Class. My price is {price} and from {from}</h2>;
    }
}

export default Apple;
