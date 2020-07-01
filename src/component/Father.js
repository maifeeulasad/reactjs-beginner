import React from 'react';

class Father extends React.Component{

    state={
        earning:40,
    };

    componentDidMount() {
        this.props.earningChange(this.state.earning);
    }

    render() {
        return(
            <div>
                I'm the father
                My address {this.props.address}
                My earning is {this.state.earning}
            </div>
        )
    }
}

export default Father;
