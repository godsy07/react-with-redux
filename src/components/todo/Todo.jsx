import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/todoAction";
import "./Todo.css";

const Todo = ({ addItem }) => {
  const [todo, setTodo] = useState("");

  const handleTodoAdd = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Please add todo");
      return;
    }
    const id = Math.floor(Math.random() * 1000 + 1);
    const todos = { id: id, text: todo, isDone: false };
    addItem(todos);
    setTodo("");
  };

  return (
    <form className='todo-area' onSubmit={handleTodoAdd}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit'>Enter</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (todos) => dispatch(addItem(todos)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
