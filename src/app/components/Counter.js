import React from 'react';

export class Counter extends React.Component {
    constructor( props ) {
        super();
        this.state = {
            count: props.count
        }
    }

    increment() {
        this.setState( {
            count: this.state.count + 1
        } );
    }

    render() {
        return (
            <div>
              <h1>Counter</h1>
              <p>{ this.state.count }</p>
              <button onClick={ this.increment.bind( this ) }>Increment Me</button>
            </div>
        );
    }
}
