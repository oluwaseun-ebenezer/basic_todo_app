import React, { Component } from 'react';

//Components
import Table from './Table.js'

class App extends Component{
    render(){
        const people = [
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
        ]

        return(
            <div>
                <Table peopleData = {people} />
            </div>
        )
    }
}

export default App;
