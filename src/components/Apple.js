

import React from "react";

class Apple extends React.Component {

    constructor(){
        super();
        this.state = { price : '300', from : 'Kashmir'};
    }
    
    render(){

        // const { price, from }= this.props.appleInfo;

        let preiceee = this.state.price;

        return <>
                <h2>Hi, I am Apple Class. My price is {preiceee} /kg and from {this.state.from}</h2>
                <button onClick={() => {this.setState(previousState => { return {...previousState, price : 400}});}}>Change Button</button>
                </>;
    }
}

export default Apple;
