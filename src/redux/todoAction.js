export const addItem = (todos) => {
  return {
    type: "ADD_TODO",
    payload: todos,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DEL_TODO",
    payload: id,
  };
};
