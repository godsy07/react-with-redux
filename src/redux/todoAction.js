export const addItem = (todos) => {
  return {
    type: "ADD_TODO",
    payload: todos,
  };
};
