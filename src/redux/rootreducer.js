const initialState = {
  todos: [
    {
      id: 1,
      text: "Meeting at 9 am",
      isDone: true,
    },
    {
      id: 2,
      text: "Go for a walk",
      isDone: false,
    },
    {
      id: 3,
      text: "Attend Meeting",
      isDone: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      console.log(action);
      return state;
    case "DEL_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
