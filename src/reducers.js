import { ADD_TODO } from './constants';
import { createUniqueID } from './createUniqueId';

const initialState = {todos: []};

export const addTodo = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    id: createUniqueID(),
                    text: action.payload,
                    status: "pending"
                }]
            });
        default:
            return state;
    }
}