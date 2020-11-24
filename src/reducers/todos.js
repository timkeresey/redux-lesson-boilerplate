export const todos = (state = [], action) => {
  switch (action.type) {
    case 'AD_TODO':
      return [...state { id: Date.now(), todo: action.todo, completed: false }];
    default:
      return state;
  }
}
