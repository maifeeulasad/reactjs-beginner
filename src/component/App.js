import React from 'react';

class App extends React.Component{

    state={
        name:"Maifee Ul Aasad",
    };

    render() {
        return(
            <div>
                My name is : {this.state.name}
            </div>
        )
    }

}

export default App;
