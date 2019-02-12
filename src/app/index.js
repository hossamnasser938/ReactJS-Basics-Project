import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
        return (
            <h1>{ "Hello" }</h1>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
