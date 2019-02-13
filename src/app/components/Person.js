import React from 'react';

export const Person = ( props ) => {
    let name = props.personObj.name;
    let age = props.personObj.age;
    let friends = props.personObj.friends;
    let welcomeMessage = "Welcome on Board ";
    let welcomeFun = props.welcomeFun;

    return(
        <div>
          <h2>Person</h2>
          <p>{ name }</p>
          <p>age: { age }</p>
          <h4>Friends</h4>
          <ul>
            { friends.map( (friend, i) => <li key={ i }>{ friend }</li> ) }
          </ul>
          <button onClick={ () => welcomeFun( welcomeMessage, name ) }>Welcome me</button>
        </div>
    );
}
