import React from 'react';

export class Person extends React.Component {
    render() {
        let name = this.props.personObj.name;
        let age = this.props.personObj.age;
        let friends = this.props.personObj.friends;
        let welcome = this.props.children
        return(
            <div>
              <h2>Person</h2>
              <p>{ welcome } { name }</p>
              <p>age: { age }</p>
              <h4>Friends</h4>
              <ul>
                { friends.map( (friend, i) => <li key={ i }>{ friend }</li> ) }
              </ul>
            </div>
        );
    }
}
