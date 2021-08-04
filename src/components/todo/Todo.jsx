import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const handleTodoAdd = () => {
    if (todo === "") {
      alert("Please add todo");
      return;
    }
  };

  return (
    <div className='todo-area'>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleTodoAdd}>Enter</button>
    </div>
  );
};

export default Todo;
