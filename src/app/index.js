import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Person } from './components/Person';
import { Counter } from './components/Counter';

class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            appName: "General App"
        };
    }

    changeAppName( newName ) {
        this.setState( {
            appName: newName
        } );
    }

    render() {
        let p = {
            name: "Hossam",
            age: 22,
            friends: ["Ismail", "Ayman"]
        };
        return (
            <div>
              <div>
                <h1>{ this.state.appName }</h1>
              </div>
              <div>
                <Person personObj={ p } initialAppName={ this.state.appName } changeAppNameFun={ this.changeAppName.bind( this ) }/>
              </div>
            </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
