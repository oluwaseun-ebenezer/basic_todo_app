import { fetchTodos } from "../reducers/todo";

export const getTodos = () => {
    return fetch('http://localhost:8080/todos')
        .then((res) => res.json());
}

export const createTodo = (item) => {
    return fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        dataType: 'json',
        body: JSON.stringify({item: item, isCompleted: false})
    })
        .then((res) => res.json());
}
