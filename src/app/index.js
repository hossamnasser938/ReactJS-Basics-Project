import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Person } from './components/Person';
import { Counter } from './components/Counter';

class AppComponent extends React.Component {
    welcomePerson( welcomeMessage, personName ) {
        alert( welcomeMessage + personName );
    }
    render() {
        let p = {
            name: "Hossam",
            age: 22,
            friends: ["Ismail", "Ayman"]
        };
        return (
            <div>
              <Person personObj={ p } welcomeFun={ this.welcomePerson }/>
            </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
