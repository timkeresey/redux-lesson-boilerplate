export const addToDo = (text) => ({
  type: 'ADD_TODO',
  text
});

export const toggleToDo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});