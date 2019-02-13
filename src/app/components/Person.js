import React from 'react';

export class Person extends React.Component {
      constructor( props ) {
          super();
          this.state = {
              appName: props.initialAppName
          }
      }

      onAppNameChange( newName ) {
          this.setState( {
              appName: newName
          } );
      }

      render() {
        let name = this.props.personObj.name;
        let age = this.props.personObj.age;
        let friends = this.props.personObj.friends;
        let changeAppNameFun = this.props.changeAppNameFun;

        return(
            <div>
              <h2>Person</h2>
              <p>{ name }</p>
              <p>age: { age }</p>
              <h4>Friends</h4>
              <ul>
                { friends.map( (friend, i) => <li key={ i }>{ friend }</li> ) }
              </ul>
              <input type="text" value={ this.state.appName } onChange={ (event) => this.onAppNameChange( event.target.value ) } />
              <button onClick={ () => changeAppNameFun( this.state.appName ) }>Change App Name</button>
            </div>
        );
    }
}
