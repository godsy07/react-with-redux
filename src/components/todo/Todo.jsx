import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/todoAction";

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
  };

  return (
    <div className='todo-area'>
      <form onSubmit={handleTodoAdd}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (todos) => dispatch(addItem(todos)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
