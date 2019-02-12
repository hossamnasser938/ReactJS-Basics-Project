import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
        return (
            <h1>Square root of 25 = { Math.sqrt(25) }</h1>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
