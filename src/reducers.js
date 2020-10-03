import { ADD_TODO, DELETE_TODO, CHECK_TODO } from './constants';
import { createUniqueID } from './createUniqueId';

const initialState = {todos: []};

export const manageTodos = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    id: createUniqueID(),
                    text: action.payload,
                    status: "pending"
                }]
            });
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            });
        case CHECK_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        let status = todo.status === "pending" ? "done" : "pending";
                        return {
                            id: todo.id,
                            text: todo.text,
                            status: status
                        };
                    }
                    else {
                        return todo;
                    }
                })
            });
        default:
            return state;
    }
}