export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];

    case 'TOGGLE_TODO':
      const updatedState = state.map(todo => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
      return updatedState;

    default:
      return state;
  }
}
