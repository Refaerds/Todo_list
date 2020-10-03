import { ADD_TODO, DELETE_TODO, CHECK_TODO } from './constants';

export const handleAddTodo = (new_todo) => ({
    type: ADD_TODO,
    payload: new_todo
})

export const handleDeleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const handleCheckTodo = (id) => ({
    type: CHECK_TODO,
    payload: id
})