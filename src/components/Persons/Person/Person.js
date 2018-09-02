import React, {Component} from 'react';
import { AuthContext } from '../../../containers/App';

import './Person.css';

class Person extends Component{
    render(){
        return (
        <div className="Person">
            <AuthContext.Consumer>
            {auth => auth ? <p>I'm authenticated!</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        )
    }
}

export default Person;