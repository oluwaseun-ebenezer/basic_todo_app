import { getTodos, createTodo } from '../lib/todoServices';

const initState = {
    todos: [],
    todoFormInput: '',
}

const ADD_TODO = 'ADD_TODO'
const FETCH_TODOS = 'FETCH_TODOS';
const REMOVE_TODO = 'REMOVE_TODO'
const EDIT_TODO = 'EDIT_TODO'    
const UPDATE_TODO_FORM_INPUT = 'UPDATE_TODO_FORM_INPUT';

export const updateTodoFormInput = (val) => ({type: UPDATE_TODO_FORM_INPUT, payload: val})

export const addTodo = (todo) => {
    return (dispatch) => {
        if (todo.length){
            createTodo(todo)
                .then((todo) => {console.log(todo); return dispatch({type: ADD_TODO, payload: todo})});
        }
    }
}

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then((todos) => dispatch({type: FETCH_TODOS, payload: todos}));
    }
}

export default (state = initState,action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todoFormInput: '', todos: state.todos.concat(action.payload)};
    
        case FETCH_TODOS:
            return {...state, todos: state.todos.concat(action.payload)};

        case UPDATE_TODO_FORM_INPUT:
            return {...state, todoFormInput: action.payload}

        default:
            return state;

    }
}
