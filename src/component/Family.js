import React from 'react';
import Father from "./Father";
import Mother from "./Mother";
import Babu from "./Babu";

class Family extends React.Component{

    state={
      address:"Home"
    };

    render() {
        return(
            <div>
                <Father address={this.state.address}/>
                <Mother address={this.state.address}/>
                <Babu address={this.state.address}/>
            </div>
        )
    }
}

export default Family;
