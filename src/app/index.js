import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Person } from './components/Person';

class AppComponent extends React.Component {
  render() {
      return (
          <div>
            <Person name={ "Hossam" } age={ 22 } />
            <Person name={ "Ismail" } age={ 24 } />
          </div>
      );
  }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
