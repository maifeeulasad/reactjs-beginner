import React from 'react';

class App extends React.Component{

    state={
        name:"Maifee Ul Aasad",
        age:2305,
    };

    render() {
        return(
            <div>
                <div>
                    My name is : {this.state.name}
                </div>
                <div>
                    My age is : {this.state.age}
                </div>
            </div>
        )
    }

}

export default App;
