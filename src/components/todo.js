import React from 'react';

const Todo = ({ text, status, id, onDeleteTodo, onCheckTodo }) => {
    let checked = status === "done" ? true : false;

    return (
        <li className={status} id={id}>
            <input type="checkbox" checked={checked} onChange={onCheckTodo}></input>
            <span>{text}</span>
            <button onClick={onDeleteTodo}>
                <span>&#43;</span>
            </button>
        </li>
    )
}

export default Todo;