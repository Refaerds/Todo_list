import React from 'react';

const AddToDo = ({ onAddTodoClick }) => {

    const handleAddTodoClick = () => {
        onAddTodoClick(); 
        document.querySelector(".new_todo input").value = '';
    }

    return (
        <div className="new_todo">
            <span className="plus">&#43;</span>
            <input type="text"></input>
            <button className="add" onClick={handleAddTodoClick}>Add</button>
        </div>
    )
}

export default AddToDo;