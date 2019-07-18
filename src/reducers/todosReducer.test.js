import { todosReducer } from '../reducers/todosReducer';

describe('todosReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = todosReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new todo', () => {
    const expected = [{
      id: 1,
      text: 'Give Leta a high five later today.',
      completed: false
    }];
    const action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'Give Leta a high five later today.'
    };
    const result = todosReducer([], action);
    expect(result).toEqual(expected);
  });

  it('should return state with an updated todo', () => {
    const expected = [
      {
        id: 1,
        text: 'Fix the leaking roof in my apartment.',
        completed: false
      },
      {
        id: 2,
        text: 'Get more groceries and prepare meals.',
        completed: true
      }
    ];
    const initialState = [
      {
        id: 1,
        text: 'Fix the leaking roof in my apartment.',
        completed: false
      },
      {
        id: 2,
        text: 'Get more groceries and prepare meals.',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    const result = todosReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});