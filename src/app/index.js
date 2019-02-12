import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Person } from './components/Person';

class AppComponent extends React.Component {
    render() {
        var p1 = {
            name: "Hossam",
            age: 22
        };
        var p2 = {
            name: "Ismail",
            age: 24
        };
        return(
            <div>
              <Person personObj={ p1 }/>
              <Person personObj={ p2 }/>
            </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
