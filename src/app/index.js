import React from "react";
import { render } from "react-dom";

class AppComponent extends React.Component {
    render() {
        return (
            <div>
              <h1>Hello, This is the first component</h1>
            </div>
        );
    }
}

render( <AppComponent/>, window.document.getElementById( "app" ) );
