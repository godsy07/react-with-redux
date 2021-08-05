import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo";
import "./home.css";

import { toggleTodo, deleteTodo } from "../../redux/todoAction";

const Home = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className='home'>
      <h1>Home Component</h1>
      <div className='add-area'>
        <Todo />
      </div>
      <div className='list-items'>
        {todos &&
          todos.map((el) => (
            <div className='todo-item' key={el.id}>
              <span
                onDoubleClick={() => toggleTodo(el.id)}
                className='todo-text'
              >
                {el.text}
              </span>
              <span onClick={() => deleteTodo(el.id)} className='todo-del'>
                &#10006;
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
