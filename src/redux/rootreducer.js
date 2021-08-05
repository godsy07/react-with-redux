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
        todos: [...state.todos, action.todos],
      };

    default:
      return state;
  }
};

export default rootReducer;
