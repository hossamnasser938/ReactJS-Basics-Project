import React from 'react'

export class Counter extends React.Component {
    constructor( props ) {
        super();
        this.count = props.count;
    }

    increment() {
        this.count++;
    }

    render() {
        return (
            <div>
              <h1>Counter</h1>
              <p>{ this.count }</p>
              <button onClick={ this.increment.bind( this ) }>Increment Me</button>
            </div>
        );
    }
}
