import React, { Component } from 'react';

import './App.css'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component{
    
    render(){
        return(
            <div className="App">
                <div className="App-Header">
                    <h1>TODO APP</h1>
                </div>
                <div className="App-Container">
                    <TodoForm />
                    <TodoList />
                </div>
            </div>
        )
    }
}

export default App;
