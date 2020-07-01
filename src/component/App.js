import React from 'react';

class App extends React.Component{

    state={
        name:"Maifee Ul Aasad",
    };

    render() {
        return(
            <div>
                <div>
                    My name is : {this.state.name}
                </div>
                <div>
                    And everybody calls me : {this.props.name}
                </div>
            </div>
        )
    }

}

export default App;
