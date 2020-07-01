import React from 'react';
import Father from "./Father";
import Mother from "./Mother";
import Babu from "./Babu";

class Family extends React.Component{
    render() {
        return(
            <div>
                <Father/>
                <Mother/>
                <Babu/>
            </div>
        )
    }
}

export default Family;
