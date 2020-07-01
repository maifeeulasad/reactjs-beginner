import React from 'react';

class App extends React.Component{

    state={
        name:"Maifee Ul Aasad",
        age:2305,
    };

    render() {
        return(
            <div>
                My name is : {this.state.name}
                My age is : {this.state.age}
            </div>
        )
    }

}

export default App;
