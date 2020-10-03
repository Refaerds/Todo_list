import { ADD_TODO } from './constants';

export const handleAddTodoClick = (new_todo) => ({
    type: ADD_TODO,
    payload: new_todo
})