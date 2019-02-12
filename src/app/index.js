import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
      let x = 5;
      return (
          <div>
            <h1>{ 0 > 0 ? "x is positive": "x is negative" }</h1>
          </div>
      );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
