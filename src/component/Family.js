import React from 'react';
import Father from "./Father";
import Mother from "./Mother";
import Babu from "./Babu";

class Family extends React.Component{

    state={
        address:"Home",
        earn:0,
    };

    earningChange = (earn) =>{
        this.setState({earn:earn});
    };

    render() {
        return(
            <div>
                Family income : {this.state.earn}
                <Father address={this.state.address} earningChange={this.earningChange}/>
                <Mother address={this.state.address} earn={this.state.earn}/>
                <Babu address={this.state.address}/>
            </div>
        )
    }
}

export default Family;
