import React from "react";

class Increment extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:0,
        };
        this.plusCount = this.plusCount.bind(this);
    }

    
    // increase count
plusCount= () =>{
    this.setState({
        counter:this.state.counter+1,
    });
}
// end increase count

// start minus count
minusCount(){
    this.setState({
        counter:this.plusCount,
        counter:this.counter-1,
    });
}   
// end minus count

render() {
    return (

    <>
    <h3>Count Value: {this.state.counter}</h3>
    <button onClick={this.plusCount}>Increment</button>
    {/* <button onClick={() => this.minusCount()}>Decrement</button> */}

    </>

    );
          
}

}
export default Increment;