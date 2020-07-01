import React from 'react';

class Father extends React.Component{
    render() {
        return(
            <div>
                I'm the father
                My address {this.props.address}
            </div>
        )
    }
}

export default Father;
