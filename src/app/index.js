import React from "react";
import { render } from "react-dom";

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
        return (
          <div>
            <div>
              <Home/>
            </div>
            <div>
              <Header/>
            </div>
          </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
