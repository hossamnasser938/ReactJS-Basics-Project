import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Person } from './components/Person';
import { Counter } from './components/Counter';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
              <Counter count={ 0 }/>
            </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
