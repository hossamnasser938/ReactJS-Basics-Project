import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
        let x = 5;
        let content = "";
        if( x > 0 ) {
            content = "x is positive";
        } else {
            content = "x is negative";
        }
        return (
            <h1>{ content }</h1>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
