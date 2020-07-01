import React from 'react';

class Mother extends React.Component{
    render() {
        return(
            <div>
                I'm the mother
                My address {this.props.address}
            </div>
        )
    }
}

export default Mother;
