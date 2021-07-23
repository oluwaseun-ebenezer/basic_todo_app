import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../reducers/todo';

import './css/TodoList.css'

class TodoList extends Component{
    
    componentDidMount(){
        this.props.fetchTodos();
    }
    
    render(){
        console.log('Rendering TodoList')

        return (
            <table className="TodoList">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Todo Item</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(this.props.todos).map(id => (
                            <tr key={id}>
                                <td>{parseInt(id, 10) + 1}</td>
                                <td>{this.props.todos[id].item}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="todo_status"
                                        defaultChecked={this.props.todos[id].isCompleted}
                                        disabled={this.props.todos[id].isCompleted ? true : false}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    { fetchTodos }
)(TodoList);
