import React from 'react';
import { connect } from 'react-redux';
import { updateTodoFormInput, addTodo } from '../reducers/todo'

import './css/TodoForm.css'

const TodoForm = (props) => {
    const { todoFormInput, updateTodoFormInput, addTodo } = props;

    const todoFormInputChangeHandler = (evt) => {
        updateTodoFormInput(evt.target.value);
    }

    const addTodoFormHandler = (evt) => {
        evt.preventDefault();
        addTodo(todoFormInput);
    }
    console.log('Todo Form rendering')

    return (
        <form className="TodoForm" onSubmit={addTodoFormHandler}>
            <input type="text" name="new_todo" value={todoFormInput} onChange={todoFormInputChangeHandler}/>
            <input type="submit" value="ADD TODO" name="add_todo" />
        </form>
    )
}

export default connect(
    (state) => ({todoFormInput: state.todoFormInput}),
    {updateTodoFormInput, addTodo}
)(TodoForm);
