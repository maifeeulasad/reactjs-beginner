import React from 'react';

class BoroApp extends React.Component{

    state={
        age:2305,
    };

    render() {
        return(
            <div>
                My age is : {this.state.age}
            </div>
        )
    }

}

export default BoroApp;
