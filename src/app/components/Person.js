import React from 'react';

export class Person extends React.Component {
    render() {
        let name = this.props.personObj.name;
        let age = this.props.personObj.age;
        return(
            <div>
              <h2>Person</h2>
              <p>Name: { name }</p>
              <p>age: { age }</p>
            </div>
        );
    }
}
