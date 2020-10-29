import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit.js';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      persons: [
        { id: 'fsef43', name: 'Max', age: 28},
        { id: 'efs523f', name: 'Manu', age: 29},
        { id: 'ef423r', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      authenticated: false,
    };
  }
  

  // switchNameHandler = (newName, newAge) => {
  //   //console.log('Was clicked!');
  //   this.setState({persons: [
  //     { name: 'Max', age: 28},
  //     { name: 'Manu', age: 29},
  //     { name: newName, age: newAge}
  //   ]
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    //Alternatively use this.state.persons.find() or simply provide index as argument
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
         <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} 
         />
        </div>
        );
      
      // (
      // <div>
      //   <Person 
      //   name={this.state.persons[0].name} 
      //   age={this.state.persons[0].age}>My hobbies: Gaming</Person>
      //  <Person 
      //   name={this.state.persons[1].name} 
      //   age={this.state.persons[1].age}
      //   click={this.switchNameHandler.bind(this, 'Stephanie!!!', 25)}
      //   >My hobbies: Bouldering</Person>
      //  <Person 
      //   name={this.state.persons[2].name} 
      //   age={this.state.persons[2].age}
      //   changed={this.nameChangeHandler}
      //   >My hobbies: Bouldering</Person>
      // </div>
      // )
    }

    return (
      <React.Fragment>
      <button onClick={() => {this.setState({showPersons: true})}} />
          <Cockpit 
          showPersons={this.state.persons} 
          login={this.loginHandler}
          persons={persons}
          toggle={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
          {
            persons
            /* { this.state.showPersons ?  
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>My hobbies: Gaming</Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Stephanie!!!', 25)}
              >My hobbies: Bouldering</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              changed={this.nameChangeHandler}
              >My hobbies: Bouldering</Person>
            </div> : null} */}
          </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
