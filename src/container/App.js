import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo';
import AddToDo from '../components/addToDo';
import { handleAddTodo, handleDeleteTodo, handleCheckTodo } from '../actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: () => dispatch(handleAddTodo(document.querySelector(".new_todo input").value)),
    onDeleteTodo: (event) => dispatch(handleDeleteTodo(event.currentTarget.parentNode.id)),
    onCheckTodo: (event) => dispatch(handleCheckTodo(event.currentTarget.parentNode.id))
  }
}

class App extends React.Component {

  render() {
    const todos = this.props.todos.map(todo => {
      return <Todo 
        text={todo.text} 
        status={todo.status} 
        key={todo.id} 
        id={todo.id}
        onDeleteTodo={this.props.onDeleteTodo}
        onCheckTodo={this.props.onCheckTodo}
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
