import React from 'react';

const AddToDo = ({ onAddTodoClick }) => {

    const handleAddTodoClick = () => {
        const input = document.querySelector(".new_todo input");

        if (input.value === '') {
            document.querySelector(".error").setAttribute("style", "display: block");
            setTimeout(() => {
                document.querySelector(".error").setAttribute("style", "display: none")
            }, 5000);
        }
        else {
            onAddTodoClick();
            document.querySelector(".new_todo input").value = '';
            document.querySelector(".error").setAttribute("style", "display: none");
        }
        
        document.querySelector(".new_todo input").focus();
    }

    return (
        <div>
            <div className="new_todo">
                <span className="plus">&#43;</span>
                <input type="text" autoFocus onKeyUp={(event) => {if (event.key === "Enter") handleAddTodoClick()}}></input>
                <button className="add" onClick={handleAddTodoClick}>Add</button>
            </div>
            <div className="error">Please describe your to-do</div>
        </div>
    )
}

export default AddToDo;