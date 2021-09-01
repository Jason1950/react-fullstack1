
import React,{Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';


//this is App example for 3-1, Navbar Component !
class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Navbar title="Github Finder" icon="fab fa-github" />
                <h2>Hello</h2>
            </div>
        );
    }
}

// this is App example for 2-8
class App2_8 extends React.Component{
    render(){
        const name = "Jason Shen";
        const loadState = false;
        const nameState = true;
        return(
            <div className="App">
                {loadState? <h2>Loading...</h2> : <h1>Hi This H1 and used React.Fragment by {nameState && name}</h1>}
            </div>
        );
    }
}

// arrow function and render return choise !
class AppState extends React.Component{
    fooOutScope = () => "xddd";
    render(){
        const name = "Jason Shen";
        const foo = () => "123 321";

        const loadState = true;

        if(!loadState){
            return (
                <div>
                    <h2>Loading...</h2>
                </div>);
        }

        return(
            <div className="App">
                <h1>Hi This H1 and used React.Fragment by {name}</h1>
                <h2>This H2 use parent React.Fragment {name[2].toUpperCase()}</h2>
                <h2>Hi {foo()}</h2>
                <h2>Hello {this.fooOutScope()}</h2>
            </div>
        )
    }
}


// type 2 for react.createElement to create something !
class App2 extends React.Component{
    render(){
        return React.createElement(
            "div", 
            {className: 'App'}, 
            React.createElement("h2", null, "This is H2 element by React.createElement !"),
            React.createElement("h3", null, "This is H3 element by React.createElement !"),
            React.createElement("div", null, "Smile :) !")
        );
    }
}


// type 3 for JSX create something ! But use <React.Fragment> to instead of <div> , and it's null tag !
class App3 extends React.Component{
    render(){
        return (
            <React.Fragment>
                <h2> H i XDD !</h2>
            </React.Fragment>
        );
    }

}

function OldApp1() {
    return (
        <div className="App">
        <h1>Hello from React !</h1>
        <h2>This is H2 !</h2>
        </div>
    );
}

export default App;
