import React, { Component } from 'react';

//Components
import Table from './Table.js'
import Form from './Form.js'

class App extends Component{

    state = {
        people : [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring Actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }

    removePerson = index =>{
        const { people } = this.state

        this.setState({
            people: people.filter((person, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = person => {
        this.setState({people: [...this.state.people, person]})
    }

    render(){    
        const { people } = this.state
        
        return(
            <div>
                <Table peopleData = { people } removePerson = { this.removePerson } />
                <Form handleSubmit={ this.handleSubmit } />
            </div>
        )
    }
}

export default App;
