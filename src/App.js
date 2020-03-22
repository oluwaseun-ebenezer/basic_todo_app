import React, { Component } from 'react';

//Components
import Table from './Table.js'

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

    render(){    
        const { people } = this.state
        
        return(
            <div>
                <Table peopleData = { people } removePerson = { this.removePerson } />
            </div>
        )
    }
}

export default App;
