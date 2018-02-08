import React, { Component } from 'react';
import './App.css';
import Person from './../components/Perons/Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'fsef43', name: 'Max', age: 28},
      { id: 'efs523f', name: 'Manu', age: 29},
      { id: 'ef423r', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

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

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id}
              />})
        }
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
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          
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
      </div>
    );
  }
}

export default App;
