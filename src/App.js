
import React,{Fragment} from 'react';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <h1>Hi This H1 and used React.Fragment</h1>
                <h2>This H2 use parent React.Fragment</h2>
            </Fragment>
        )
    }
}

function OldApp() {
  return (

    <div className="App">
      <h1>Hello from React !</h1>
      <h2>This is H2 !</h2>
    </div>
  );
}

export default App;
