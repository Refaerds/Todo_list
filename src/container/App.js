import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo';
import AddToDo from '../components/addToDo';
//import { createUniqueID } from '../createUniqueId';

import { handleAddTodoClick } from '../actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: () => dispatch(handleAddTodoClick(document.querySelector(".new_todo input").value))
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: "1",
          text: "to-do",
          status: "pending"
        },
        {
          id: "2",
          text: "to-do",
          status: "done"
        }
      ]
    }
  }

  // handleAddTodoClick = (new_todo) => {
  //   this.setState(previousState => ({
  //     todos: [...previousState.todos, {
  //       id: createUniqueID(),
  //       text: new_todo,
  //       status: "pending"
  //     }]
  //   }))
  // }

  handleDeleteTodo = (event) => {
    const id = event.currentTarget.parentNode.id;

    this.setState(previousState => ({
      todos: previousState.todos.filter(todo => todo.id !== id)
    }))
  }

  handleCheckTodo = (event) => {
    const id = event.currentTarget.parentNode.id;
    this.setState(previousState => ({
      todos: previousState.todos.map(todo => {
        if (todo.id === id) {
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
    }))
  }

  render() {
    const todos = this.props.todos.map(todo => {
      return <Todo 
        text={todo.text} 
        status={todo.status} 
        key={todo.id} 
        id={todo.id}
        onDeleteTodo={this.handleDeleteTodo}
        onCheckTodo={this.handleCheckTodo}
      />;
    })

    return (
      <div>
        <h1>My to-do list:</h1>
        <div className="list">
          <ul>
            {todos}
          </ul>
          <AddToDo onAddTodoClick={this.props.onAddTodoClick}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
